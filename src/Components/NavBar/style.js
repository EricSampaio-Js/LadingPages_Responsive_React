import styled from 'styled-components'



export const  Nav = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100px;
background-color:var(--color-neutral);

@media  (max-width:900px){
    justify-content:space-around;
    padding:0 1rem 0 1rem;
}

@media (max-width: 641px) {
    justify-content:start;
    padding:0 1rem 0 1.5rem;
}

`

export const  Logo = styled.img`
margin-right:min(222px,max(11.63490471414243vw,75px));

width: 180px;
height: 52px;

`

export const  Menu = styled.ul`
display: flex;
list-style-type: none;
gap:min(56px,max(2.808425275827482vw,32px));

font-family:var(--font-second);
font-size:1.25rem;
font-weight: 500;
transition:all 5s linear;

>:first-child{
    color:var(--primary-color);
    font-weight: 600;
}


@media (max-width: 967px) {
    
    &{
    display: ${({menuMobile})=> menuMobile? 'flex' : 'none'};
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:var(--primary-color);
    color:var( --color-neutral);
    list-style-type: none;
    font-size:2.5rem;
    
    >:first-child{
    color:var(--color-complement-blueDark);
    font-weight: 600;
    
    }       
  }
}

`

export const  IconSocials = styled.div`
display:flex;
align-items: center;
margin-left:min(91px,max(4.563691073219659vw,43px));

>img{
    weight:30px;
    height:30px;

    &:nth-child(-n + 2) {
        margin-right:min(48px,max(2.407221664994985vw,32px));
    }

}

@media (max-width: 641px) {
    display:none;
}

`

export const MenuMobile = styled.img`
display:none;
position: absolute;
z-index:100;
right:30px;
top:34px;

@media (max-width: 967px) {
    display:block;
}

`
