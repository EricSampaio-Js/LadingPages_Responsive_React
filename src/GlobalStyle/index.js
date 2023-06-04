import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`


*,:before,:after,html,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: none;
    border:none;
    text-decoration: none;
    list-style:none;

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
    --color-neutralTwo:#F3F4F6;

    ${'' /* ######### FONT ################# */}

    --font-primary:'Mukta', sans-serif;
    --font-second:'Inter', sans-serif;

}

html{
    ${'' /* font-size:16px; */}
}


`