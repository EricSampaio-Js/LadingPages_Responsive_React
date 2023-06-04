import React from "react";


import IconVacina from './../../image/vacina.png';
import IconAgricultura from './../../image/agricultura.png';
import IconCanaDeAcucar from './../../image/cana-de-acucar.png';
import IconComputador from './../../image/computador.png';
import IconDespesas from './../../image/despesas.png';
import IconFinanceiro from './../../image/financeiro.png';
import IconProcesso from './../../image/processo.png';
import IconVaca from './../../image/vaca.png';
import IconLogo from './../../image/logo2.png';  
import IconEnvolopSimple from './../../icones/EnvelopeSimple.svg';
import IconPhone from './../../icones/Phone.svg';
import IconGlobe from './../../icones/GlobeHemisphereWest.svg';
import IconIstagram from '../../icones/InstagramLogo.svg'
import IconFacebook from '../../icones/FacebookLogo.svg'
import IconLinkedin from '../../icones/LinkedinLogo.svg'



import CardCouser from './../../Components/Cards/Couser'
import NewsCard from './../../Components/Cards/News'
import Button from './../../Components/Button'

import {
    BannerHero,
    CardsHero,
    Container,
    Texts,
    TitleHero,
    Courses,
    TitleCourse,
    JobInformation,
    BannerJobs,
    InforText,
    News,
    Footer,
    LogoFooter,
    Contact,
    Sobre,
    RedSocial,
    TitleSobre,
    TextSobre,
    ContainerFooter
} from './style';




const ListOfCourses = [
    {img:IconVacina, text:'enfermagem'},
    {img:IconAgricultura, text:'desenvolvimento de sistemas'},
    {img:IconCanaDeAcucar, text:'recursos humanos'},
    {img:IconComputador, text:'administração'},
    {img:IconDespesas, text:'açúcar e álcool'},
    {img:IconFinanceiro, text:'agronegócio'},
    {img:IconProcesso, text:'zootecnia'},
    {img:IconVaca, text:'agropecuária'},
]


const Home = () => {
    return ( 
        <Container>
                <BannerHero>
                    <TitleHero>
                        Helcy Moreira Martins Aguiar
                    </TitleHero>
                    <Texts>
                        Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy 
                        Moreira Martins Aguiar se destaca no ensino médio e técnico, 
                        recebendo constantemente menções e congratulações em todo o estado de 
                        São Paulo.
                    </Texts>
                </BannerHero>

                <CardsHero card='cards' style={{'background':'var( --primary-color)'}}>
                   <h1>
                    Mantida pelo governo do Estado de São Paulo, os 
                    cursos oferecidos – além de qualidade ímpar – são 
                    totalmente gratuitos, levando para toda a população 
                    um ensino de qualidade e a oportunidade de 
                    aprender uma profissão.
                   </h1>
                </CardsHero>
                <CardsHero card='cards'  style={{'background':'var(--color-gray)'}}>
                 <h1>
                    Contando com um corpo docente extremamente 
                    qualificado e estrutura física moderna, os cursos 
                    oferecidos nesta unidade se destacam pela 
                    qualidade de ensino, onde o aluno realmente 
                    aprende conteúdos relevantes, de maneira fácil e 
                    didática.
                 </h1> 
                </CardsHero>
                <CardsHero card='cards' style={{'background':'var(--color-complement-blue)'}}>
                 <h1>
                    Baseado em uma didática prática, os alunos são 
                    envolvidos em conteúdos que abordam as diversas
                    realidades do mercado, formando assim mão de 
                    obra qualificada e proporcionando uma experiência 
                    diferenciada para o aluno.
                 </h1>
                </CardsHero>

                <Courses>
                    <TitleCourse>Cursos técnicos</TitleCourse>
                    {ListOfCourses.map(({img,text})=>{
                            return(
                                <CardCouser image={img} text={text} />
                            )
                        })
                    }
                </Courses>

                <JobInformation>
                    <BannerJobs>
                        <h1>Estágios e empregos</h1>
                    </BannerJobs>
                    <InforText>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <h4>Publicado em 00/00/2000</h4>
                        <a href="#">Mais mais sobre a vaga</a>
                        
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <h4>Publicado em 00/00/2000</h4>
                        <a href="#">Mais mais sobre a vaga</a>

                        <h3>Lorem ipsum dolor sit amet</h3>
                        <h4>Publicado em 00/00/2000</h4>
                        <a href="#">Mais mais sobre a vaga</a>
                    </InforText>
                </JobInformation>

                <News>
                    <h1>Notícias</h1>
                    
                    <div>
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>
                    <Button  
                    textButton={'Ver mais notícias'}
                    />    
                </News>

                <Footer>
                    <ContainerFooter>
                    <LogoFooter src={IconLogo} />
                    <Contact>
                        <ul>
                            <li>
                                <img src={IconGlobe} alt="" />
                                <span> Rua Codelândia, 1367 <br />
                                    <span>Cafelândia, SP</span>
                                </span> 
                                
                                
                            </li>
                            <li>
                                <img src={IconPhone} alt="" />
                                <span>+55 14 9999-9999</span>
                            </li>
                            <li>
                                <img src={IconEnvolopSimple} alt="" />
                                <span>centropaulasouza@etec.sp.gov.br</span>
                            </li>
                        </ul>
                    </Contact>
                    <Sobre>
                        <TitleSobre> Sobre a Etec Cafelândia </TitleSobre>
                        <TextSobre>
                            Com mais de 20 anos de atuação, a unidade da Etec Professora 
                            Helcy Moreira Martins Aguiar se destaca no ensino médio e técnico, 
                            recebendo constantemente menções e congratulações em 
                            todo o estado de São Paulo. 
                        </TextSobre>
                            <RedSocial>
                                <img src={IconIstagram} alt="" />
                                <img src={IconFacebook} alt="" />
                                <img src={IconLinkedin} alt="" />
                            </RedSocial>
                        </Sobre>
                    </ContainerFooter>
                    
                </Footer>
        </Container>
     );
}
 
export default Home;