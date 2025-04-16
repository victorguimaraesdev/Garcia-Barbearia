import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import syled from 'styled-components';

const GoogleButton = syled(GoogleLogin)`
    height: 50px;
    width: 200px;
    position: absolute;
    z-index: 1000;
`;

export const Login = () => {
    const [credential, setCredential] = useState<CredentialResponse | null>(null);

    useEffect(() => {
        localStorage.setItem('credential', JSON.stringify(credential));
    }, [credential]);

    return (
        <GoogleButton
            onSuccess={credentialResponse => {
                setCredential(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}
