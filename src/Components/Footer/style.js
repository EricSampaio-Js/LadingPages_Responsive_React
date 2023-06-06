
import styled from 'styled-components'

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
