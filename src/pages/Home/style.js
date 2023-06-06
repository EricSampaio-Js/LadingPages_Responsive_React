import styled from "styled-components";

export const Container = styled.div`
display:grid;

grid-template-columns:1fr 1fr 1fr;

grid-template-areas:
'Banner Banner  Banner'
'Card Card Card'
'Couser Couser Couser'
'JobsInfor JobsInfor JobsInfor'
'News News News'
'Footer Footer Footer';



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
font-size:min(1.5rem,max(1.354166666666667vw,13px));
width:78.90625%;
height: auto;
color:var(--color-neutral);

}

@media (max-width:887px){
    display:none;
}


`

export const Texts = styled.div`
width:100%;
max-width:1008px;
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


export const JobInformation = styled.div`
    display:flex;
    width:100%;
    grid-area:JobsInfor;

    background:var( --color-neutralTwo);
    margin-top:100px;

@media (max-width:883px){
    display:flex;
    flex-direction: column;
}
`
export const BannerJobs = styled.div`
display:flex;
justify-content:center;
align-items:center;

width:50%;
background:var( --primary-color);
color:var( --color-neutral);

@media (max-width:883px){
width:100%;
height:149px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}
`
export const InforText = styled.div`
font-family: var(--font-primary);
font-weight: 600;
font-size: 1.5rem;

background:var(--color-neutralTwo);
color:var( --color-black);

    
padding:56px;
transition:all 0.5s;

@media (max-width:595px){
    padding:24px;
}

>h3,h4{
    margin-bottom:16px;
}

>h4{
font-family: var( --font-second);
font-weight: 400;
font-size: 1.125rem;
color:var(--color-gray);
}
>a{
display:inline-block;
color:var(--primary-color);
font-weight: 500;
text-decoration: underline;
margin-bottom:4.625rem;
}
`
export const NewsWreap = styled.div`
grid-area:News;
margin:100px 46px;
`

export const  FooterWrap = styled.div`
grid-area:Footer;
background:var(--primary-color);
`
