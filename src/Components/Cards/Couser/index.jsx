


import {
    Container,
    IconeCouser,
    Texts,
} from './style'



const CardCouser = ({image,text}) => {
    return ( 
        <Container>
            <IconeCouser src={image}/>
            <Texts>{text}</Texts>
        </Container>
     );
}
 
export default CardCouser;