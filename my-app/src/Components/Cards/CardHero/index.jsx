import React from "react";


import IconGroupImg from './../../../assets/image/personGroupCard.svg'

import {
    Container,
    Text,
    GroupImag,
} from './styled';

function CardHero(){
    return(
        <Container>
            <Text>
                 Learn from best <span>instructors</span> around <br/>the globe
            </Text>

            <GroupImag>
                <img src={IconGroupImg} /> 
                <img src={IconGroupImg} /> 
                <img src={IconGroupImg} /> 
                <img src={IconGroupImg} /> 
                <img src={IconGroupImg} /> 
            </GroupImag>
 
        </Container>
    )
}

export default CardHero