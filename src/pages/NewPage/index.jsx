

import Footer from './../../Components/Footer';
import News from './../../Components/News';
import {
    Container,
    MainNew,
    Banner,
    NavNew,
    Socials,
    WrapperGrid
} from './style'

const NewPage = () => {
    return ( 
        <Container>
            <Socials>
                <h1>compartilhar no facebook</h1>
                <h1>compartilhar no instagram</h1>
                <h1>compartilhar no linkedin</h1>
            </Socials>
       
            <WrapperGrid>
                <MainNew>
                    <Banner>
                        banner
                    </Banner>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita nihil commodi odit at.</h1>
                        <h3>Postado em Julho 2, 2000</h3>
                        <p>
                        Hey!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi nulla dicta quo, provident quaerat quidem modi error nostrum a vitae reprehenderit voluptate blanditiis deserunt recusandae alias omnis vero. Et!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro expedita nihil commodi odit at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi nulla dicta quo, provident quaerat quidem modi error nostrum a vitae reprehenderit voluptate blanditiis deserunt recusandae alias omnis vero. Et!
                        Thanks!
                    </p>
                </MainNew>
                <NavNew>
                    <h1>Outras notícias</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                </NavNew>
            </WrapperGrid>
            <News />
            <div style={{width:'100%', background:'var(--primary-color)'}}>
                <Footer />
            </div>
            

        </Container>
  
     );
}
 
export default NewPage;