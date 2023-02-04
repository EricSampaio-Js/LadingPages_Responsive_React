import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*,:before,:after{
    margin: 0;
    padding: 0;
    
    list-style:none;
    text-decoration: none;
    border:none;
    outline: none;
    box-sizing: border-box;

   
}
   body{
        background:brown;
    @media screen and(min-width: 700px){
        padding: 0 16px 0 16px;
    }
   }
   :root{
        --color-primary:#09B451;
        --color-primary-light:#DDFFFF;
        --color-complement-gray:#404040;
        --color-complement-black:#000000;
        --color-complement-white:#FFFFFF;
   }
 
`