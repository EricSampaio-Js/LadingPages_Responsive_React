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
export const News = styled.div`
grid-area:News;
width:100%;
max-width:1216px;
padding-bottom:90px;
margin:auto;
text-align:center;
>h1{
font-family: 'Mukta';
font-weight: 600;
font-size: 40px;
text-align:center;

margin:100px 46px;

}

>div{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:32px;
}


>button{
    margin-top:75px;
}
`

export const  Footer = styled.div`
grid-area:Footer;



background:var(--primary-color);


`

// width:100%;
// max-width:1216px;
// margin:auto;

export const ContainerFooter = styled.div`
display:grid;
width:100%;
max-width:1216px;
height:100%;
grid-template-columns:repeat(3,1fr);

justify-items:end;
color:var(--color-neutral);
margin:auto;

@media (max-width: 1008px){
    justify-items:center;
    grid-template-columns:1fr;
}
`

export const  LogoFooter = styled.img`
margin:4.625rem max(6.770833333333333vw, 50px) 0 0;

width: 280px;
height: 80px;

`

export const  Contact = styled.div`
margin-bottom:75px;
ul{
  
    width:100%;
    margin: 4.8125rem 0 0 0;
    >li{
        display:flex;
        align-items:center;
        margin-bottom:18px;
    }

    li>img{
        width:24px;
        height:24px;
        margin-right:1rem;
        background-color:var(--color-neutral);
        border-radius:100%;
        box-sizing:content-box;
        padding:12px;
     
    }
   
    >:nth-child(1) {
        >span{
        font-family: var(--font-second);
        font-weight: 400;
        font-size: 0.75rem;   
        line-height: 15px;  
        
        &>span{
            font-family: var(--font-primary);
            font-weight: 500;
            font-size: 1rem;
            line-height: 27px;
            }   
        }
    }
    >:nth-child(n+2) {
        font-family: var(--font-primary);
        font-weight: 500;
        font-size: 1.125rem;
    }
   
}



`

export const  TitleSobre = styled.h2`
font-family: var(--font-primary);
font-weight: 600;
font-size: 1.125rem;

margin-bottom:8px;

`
export const  Sobre = styled.p`
display:flex;
flex-direction: column;
width:100%;
max-width: 312px;
margin:74px 0 0 0;

@media (max-width:848px){
    align-items:center ;
    margin:unset;
}

`

export const  RedSocial = styled.div`
    >img{
        width:24px;
        height:24px;
        margin-right:1rem;
        background-color:var(--color-neutral);
        border-radius:100%;
        box-sizing:content-box;
        padding:12px;
        margin-bottom:18px;
    }
`


export const  TextSobre = styled.p`
font-family: var(--font-second);
font-weight: 500;
font-size: 0.75rem;

line-height: 160%;
margin-bottom:24px;
`
