import React from "react";


import personGroupImg from './../../../assets/image/personGroupCard.svg'

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
                <img src={personGroupImg} alt='' /> 
                <img src={personGroupImg} alt='' /> 
                <img src={personGroupImg} alt='' /> 
                <img src={personGroupImg} alt='' /> 
                <img src={personGroupImg} alt='' /> 
            </GroupImag>
 
        </Container>
    )
}

export default CardHero