import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`


*,:before,:after,html,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: none;
    border:none;
    text-decoration: none;

    ;

}

:root{
    ${'' /* ####### COLORS ########### */}
    --primary-color:#B91C1C;
    --color-complement-blueDark:#111827 ;
    --color-complement-blue: #481A8F;
    --color-gray:#353436 ;
    --color-black: #111827 ;
    --color-neutral:#FFFFFF;

    ${'' /* ######### FONT ################# */}

    --font-primary:'Mukta', sans-serif;
    --font-second:'Inter', sans-serif;

}


body{
    background:gray;

}


`