

import {
    Buttons
} from './style';

const Button = ({textButton,sizeButton},props) => {
    return ( 
        <Buttons size={sizeButton}  >
            {textButton}
        </Buttons>
     );
}
 
export default Button;