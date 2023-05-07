import styled from 'styled-components'



export const  Nav = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100px;
background-color:var(--color-neutral);

@media and (max-width:900px){
    padding:0 1rem 0 1rem;
}

`

export const  Logo = styled.img`
margin-right:min(222px,max(11.63490471414243vw,75px));

width: 180px;
height: 52px;

`

export const  Menu = styled.div`
display: flex;
list-style-type: none;
${'' /* gap:56px; */}
gap:min(56px,max(2.808425275827482vw,32px));

font-family:var(--font-second);
font-size:1.25rem;
font-weight: 500;

>:first-child{
    color:var(--primary-color);
    font-weight: 600;
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

`
