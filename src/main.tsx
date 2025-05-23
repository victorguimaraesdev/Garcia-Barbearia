// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "../global/Globla.Style.ts";
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App.tsx";

const ClientID = "338047362905-m9pqig6itjqbhj8l4jivbjbujk5v4k2t.apps.googleusercontent.com"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={ClientID}>
      <BrowserRouter>
        <>
          <GlobalStyle />
          <App />
        </>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);