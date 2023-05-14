import React from "react";


import {
    BannerHero,
    CardsHero,
    Container,
    Texts,
    Title
} from './style';

const Home = () => {
    return ( 
        <Container>
                <BannerHero>
                    <Title>
                        Helcy Moreira Martins Aguiar
                    </Title>
                    <Texts>
                        Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy 
                        Moreira Martins Aguiar se destaca no ensino médio e técnico, 
                        recebendo constantemente menções e congratulações em todo o estado de 
                        São Paulo.
                    </Texts>
                </BannerHero>

                <CardsHero style={{'background':'var( --primary-color)'}}>
                   <h1>
                     Mantida pelo governo do Estado de São Paulo, os 
                    cursos oferecidos – além de qualidade ímpar – são 
                    totalmente gratuitos, levando para toda a população 
                    um ensino de qualidade e a oportunidade de 
                    aprender uma profissão.
                   </h1>
                </CardsHero>
                <CardsHero  style={{'background':'var(--color-gra)'}}>
                 <h1>
                    Contando com um corpo docente extremamente 
                    qualificado e estrutura física moderna, os cursos 
                    oferecidos nesta unidade se destacam pela 
                    qualidade de ensino, onde o aluno realmente 
                    aprende conteúdos relevantes, de maneira fácil e 
                    didática.
                 </h1> 
                </CardsHero>
                <CardsHero  style={{'background':'var(--color-complement-blue)'}}>
                 <h1>
                    Baseado em uma didática prática, os alunos são 
                    envolvidos em conteúdos que abordam as diversas
                    realidades do mercado, formando assim mão de 
                    obra qualificada e proporcionando uma experiência 
                    diferenciada para o aluno.
                 </h1>
                </CardsHero>
        </Container>
     );
}
 
export default Home;