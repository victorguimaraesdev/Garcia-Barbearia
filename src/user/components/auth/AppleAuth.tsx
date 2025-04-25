import AppleSignin, { AppleAuthResponse, AppleSignInButtonProps } from 'react-apple-signin-auth';
import { useState, useEffect } from 'react';
import { PropsAuth } from './typeAuth';
import axios from 'axios';

export const LoginApple = ({ setAutorizado }: PropsAuth) => {
    const [response, setResponse] = useState<AppleAuthResponse | null>(null);

    const EnviarCredenciais = async ({ authorization, user }: AppleAuthResponse) => {
        if (!authorization || !user) return;

        const { status, data } = await axios.post("http://localhost:3000/api/usuarios", { 
            credential: authorization.id_token,
            clientId: 'com.garcia.web',
            plataform: {
                isApple: true,
                nameApple: `${user.name.firstName} ${user.name.lastName}`,
            } 
        });
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
        if (response && response.authorization.id_token) {
            EnviarCredenciais(response);
        }
    }, [response]);

  const handleSuccess = (response: AppleAuthResponse) => {
    setResponse(response);
    console.log('Login bem-sucedido:', response);
  };

  const handleError = (error: AppleAuthResponse) => {
    console.error('Erro no login:', error);
  };

  return (
    <AppleSignin
      authOptions={{
        clientId: 'com.example.web',
        scope: 'email name',
        redirectURI: 'https://example.com',
        state: 'state',
        nonce: 'nonce',
        usePopup: true,
      }}
      uiType="dark"
      className="apple-auth-btn"
      noDefaultStyle={false}
      buttonExtraChildren="Continue with Apple"
      onSuccess={handleSuccess}
      onError={handleError}
      skipScript={false}
      iconProps={{ style: { marginTop: '10px' } }}
      render={(props: AppleSignInButtonProps) => {
        const { onError, onSuccess, skipScript, buttonExtraChildren, ...buttonProps } = props;
        return (
          <button
            {...buttonProps}
            className={props.className || undefined}
            aria-label="Login com Apple"
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            My Custom Button
          </button>
        );
      }}
    />
  );
};