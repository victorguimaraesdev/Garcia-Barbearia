import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useState, useEffect } from "react";
import API from "../../utils/API";
import axios from "axios";

interface Props {
    setAutorizado: (value: boolean) => void;
}

export const Login = ({ setAutorizado }: Props) => {
    const [teste, setTeste] = useState<CredentialResponse | null>(null);

    const EnviarCredenciais = async ({ credential, clientId }: CredentialResponse) => {
        if (!credential || !clientId) return;

        const { status, data } = await API.POST("/usuarios", { credential, clientId, role: "2" });
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
        if (teste && teste.credential && teste.clientId) {
            EnviarCredenciais(teste);
        }
    }, [teste]);

    return (
        <GoogleLogin
            onSuccess={(credentialResponse) => {
                setTeste(credentialResponse);
            }}
            onError={() => {
                console.log("Login Failed");
            }}
        />
    );
};
