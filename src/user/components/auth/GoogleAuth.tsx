import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useState, useEffect } from "react";
import { PropsAuth } from "./typeAuth";
import axios from "axios";

export const LoginGoogle = ({ setAutorizado }: PropsAuth) => {
    const [response, setResponse] = useState<CredentialResponse | null>(null);

    const EnviarCredenciais = async ({ credential, clientId }: CredentialResponse) => {
        if (!credential || !clientId) return;

        const { status, data } = await axios.post("http://localhost:3000/api/usuarios", { credential, clientId });
        if (status === 200) {
            const token = data.authorization;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
            setAutorizado(true);
            return;
        }
        if (status === 401) {
            localStorage.setItem("token", "");
            setAutorizado(false);
            return;
        }
    };

    useEffect(() => {
        if (response && response.credential && response.clientId) {
            EnviarCredenciais(response);
        }
    }, [response]);

    return (
        <GoogleLogin
            onSuccess={(credentialResponse) => {
                setResponse(credentialResponse);
            }}
            onError={() => {
                console.log("Login Failed");
            }}
        />
    );
};