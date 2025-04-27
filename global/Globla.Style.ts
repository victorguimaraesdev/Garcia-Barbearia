import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       font-family: "Roboto", sans-serif;
       user-select: none;
        -webkit-tap-highlight-color: none;
        -webkit-touch-callout: none;
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
        color: inherit;
    }

   ::-webkit-scrollbar {
       width: 3px;
   }

   ::-webkit-scrollbar-track {
       background: var(--transparent);
   }

   ::-webkit-scrollbar-thumb {
       background: var(--supp);
       border-radius: 0px;
   }

   ::-webkit-scrollbar-thumb:hover {
       background: var(--supp);
   }
`;
