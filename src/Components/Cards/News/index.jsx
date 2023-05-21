
import {
    Container,
    TitleCard,
    ImageCard,
    DatePosted

} from './style';

const News = () => {
    return ( 
        <Container>
            <ImageCard  />
            <TitleCard>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.
            </TitleCard>
            <DatePosted>Postado em 00/00/00</DatePosted>
        </Container>
     );
}
 
export default News;