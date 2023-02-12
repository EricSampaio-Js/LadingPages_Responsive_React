import styled,{css} from "styled-components";

const configCss = function(whichConfigButton) {
   
    const config = {
        whiteColor:css`
        color:var(--color-primary);
        background:var(--color-complement-white);
        border-radius: 5px;
        
        `,
        greenColor:css`
        color:var(--color-complement-white);
        background:var(--color-primary);
        border-radius: 5px;
        
        `
    }

    return config[whichConfigButton]
}



export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.625rem;
  height: 2.75rem;

  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 1rem;
  cursor:pointer;

   ${ ({styleds}) => configCss(styleds) }
  
`