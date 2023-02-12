import styled from "styled-components";




export const  Container = styled.div`
width:16.375rem;
height:11.6875rem;

background: var(--color-complement-white);
box-shadow: 0px 0px 69.2333px rgba(112, 112, 112, 0.25);
border-radius: 14px 14px 30px 14px;

padding: 17.68px 23.65px 12.09px 24.21px;

`

export const  Text = styled.h6`
    font-family: 'Source Sans Pro';
    font-size:1.25rem;
    font-weight:600;
    line-height: 30px;
    text-align:center;

    margin-bottom:10.23px;

    >span{
        color:var(--color-primary);
    }

  
`

export const  GroupImag = styled.div`
    display:flex;
    padding:0 0 0 54px;
    >img{
        margin-left:-24px;
    }

`
