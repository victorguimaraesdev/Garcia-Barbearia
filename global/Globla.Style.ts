import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       font-family: "Roboto", sans-serif;
   }

   :root {
       --primaria:rgb(255, 255, 255);
       --secundaria: #39FF14;
       --contraste: #000000;
       --supp:rgb(31, 31, 31);
   }


   body {
    background: var(--contraste); 
    color: white;
   }
   
   ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
`;
