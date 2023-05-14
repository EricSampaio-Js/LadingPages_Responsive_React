import styled from "styled-components";

export const Container = styled.div`
display:grid;

grid-template-columns:1fr 1fr 1fr;

grid-template-areas:
'Banner Banner  Banner'
'Card Card Card'
'Couser Couser Couser';

`

export const BannerHero = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 33.625rem;
background:var( --color-complement-blueDark);

grid-area:Banner;

`

export const CardsHero = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 100%;
height: 15.625vw;
background:var( --color-gray);

>h1{
font-family: var(--font-second);
font-weight: 500;
font-size:min(1.5rem,max(1.354166666666667vw,1.25rem));
width:78.90625%;
height: 160px;
color:var(--color-neutral);

}

`

export const Texts = styled.div`
width:1008px;
color:var(--color-neutral);
font-family: var(--font-second);
font-weight: 500;
font-size: 1.5rem;
text-align:center;
line-height: 160%;
`

export const TitleHero = styled.div`
color:var(--color-neutral);
font-family: var(--font-primary);
font-weight: 600;
font-size: 3rem;
margin-bottom:1.5rem;
`

export const Courses = styled.div`
width:100%;
max-width:1216px;
grid-area:Couser;

display:grid;

grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
gap:32px;
margin:auto;


`
export const TitleCourse = styled.div`
margin:107px 0 18px 0;
height:100%;
text-align:center;
grid-column:1/ -1;

font-family: var(--font-primary);
font-weight: 600;
font-size: 40px;


`
