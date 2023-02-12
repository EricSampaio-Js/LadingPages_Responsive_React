import React from "react";
import IconPersons from './../../../assets/icon/iconPerson.svg'
import {
    Container,
    IconPerson,
    Infor,
    Text,
} from './styled'


function CardHeroInfor(){

    return(
        <Container>
            <IconPerson src={IconPersons} />
            <Infor>15k</Infor>
            <Text>Amazing students around the globe</Text>
            
        </Container>
    )
}


export default CardHeroInfor;