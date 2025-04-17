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
  const [teste, setTeste] = useState<CredentialResponse>({});

  const EnviarCredenciais = async ({
    credential,
    clientId,
  }: CredentialResponse) => {
    console.log(credential, clientId);
    if (!credential || !clientId) return;
    console.log("hit");
    try {
      const { status, data } = await axios.post(
        "http://localhost:3000/api/usuarios",
        { credential, clientId }
      );

      if (status === 200) {
        const token = data.authorization;
        localStorage.setItem("token", token);
        setAutorizado(true);
      }

      if (status === 401) {
        alert(data.message);
        setAutorizado(false);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao logar: " + error);
    }
  };
  useEffect(() => {
    EnviarCredenciais(teste);
    console.log(teste);
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
