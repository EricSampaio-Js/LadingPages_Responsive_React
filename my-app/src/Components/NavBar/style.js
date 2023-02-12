import styled from "styled-components"; 


export const  Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 6.25rem;
padding:0 6.684491978609626% 0 6.684491978609626%;
`

export const  Logo = styled.img`
`

export const  Nav = styled.div`
display:flex;
align-items: center;    
gap:24px;
font-family: 'Open Sans';
font-weight: 600;
font-size: 1rem;
color:var(--color-complement-gray);

>li{
    cursor:pointer;
}

`

export const  Action = styled.div`
display: flex;
align-items: center;

`

export const  SearchIcon = styled.img`
margin-right:17px;
width: 24px;
height: 24px;
cursor:pointer;

`

