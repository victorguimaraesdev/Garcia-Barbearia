import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import syled from "styled-components";
import { useState, useEffect } from "react";

interface Props {
    setAutorizado: (value: boolean) => void;
}

const GoogleButton = syled(GoogleLogin)`
    height: 50px;
    width: 200px;
    position: absolute;
    z-index: 1000;
`;

export const Login = ({ setAutorizado }: Props) => {
    const [teste, setTeste] = useState<CredentialResponse | null>(null);

    const EnviarCredenciais = async ({ credential, clientId }: CredentialResponse) => {
        if (!credential || !clientId) return;

        const { status, data } = await axios.post("http://localhost:3000/api/usuarios", { credential, clientId });
        if (status === 200) {
            const token = data.authorization;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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
        <GoogleButton
            onSuccess={(credentialResponse) => {
                setTeste(credentialResponse);
            }}
            onError={() => {
                console.log("Login Failed");
            }}
        />
    );
};
