import styled from 'styled-components';


export const Container = styled.div`

`
export const WrapperGrid = styled.div`
    display:flex;
    width:100%;
    max-width:1216px;
    margin:auto;
    gap:max(10px,min(104px, 5.416666666666667vw));

    @media (max-width: 1000px){
    gap:0px;
    justify-content:center;
}
`

export const Socials = styled.div`
display:flex;
margin-bottom:104px;

>h1{
display:flex;
align-items:center;
justify-content:center;
width: 33.33333333333333%;
height: 150px; 
text-transform:uppercase;

font-family: var(--font-primary);
font-weight: 600;
font-size:max(16px,min(1.5625vw,24px));

color:var(--color-neutral);

:nth-child(1){
    background:var(--color-social-face);
}
:nth-child(2){
    background:var(--color-social-insta);
}
:nth-child(3){
    background:var(--color-social-linke);
}

}
`

export const MainNew = styled.div`
width:100%;
max-width: 800px;
margin-bottom:100px;
h1{

font-family: var(--font-primary);
font-weight: 500;
font-size: 2rem;
line-height: 44px;
color:var(--color-complement-blueDark);
}
h3,p{
font-family: var(--font-second);
font-weight: 400;
font-size: 1.25rem;
color:var(--color-complement-blueDark);
}

p{

}

`
export const Banner = styled.div`
width:100%;
max-width: 800px;
height: 351px;
background:var(--primary-color);
border-radius: 4px;
`
export const NavNew = styled.div`
h1{
font-family: var( --font-primary);
font-weight: 500;
font-size: 2rem;
}

h3{
font-family: var(--font-second);
font-weight: 400;
font-size: 1rem;
line-height: 25.6px;
margin-bottom:24px;
color:var(--color-gray);
}

@media (max-width: 1000px){
display:none;
}
`