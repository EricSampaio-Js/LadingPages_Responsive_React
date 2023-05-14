import React from "react";


import IconVacina from './../../image/vacina.png';
import IconAgricultura from './../../image/agricultura.png';
import IconCanaDeAcucar from './../../image/cana-de-acucar.png';
import IconComputador from './../../image/computador.png';
import IconDespesas from './../../image/despesas.png';
import IconFinanceiro from './../../image/financeiro.png';
import IconProcesso from './../../image/processo.png';
import IconVaca from './../../image/vaca.png';


import CardCouser from './../../Components/Cards/Couser'

import {
    BannerHero,
    CardsHero,
    Container,
    Texts,
    TitleHero,
    Courses,
    TitleCourse
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

                <CardsHero style={{'background':'var( --primary-color)'}}>
                   <h1>
                     Mantida pelo governo do Estado de São Paulo, os 
                    cursos oferecidos – além de qualidade ímpar – são 
                    totalmente gratuitos, levando para toda a população 
                    um ensino de qualidade e a oportunidade de 
                    aprender uma profissão.
                   </h1>
                </CardsHero>
                <CardsHero  style={{'background':'var(--color-gray)'}}>
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

                <Courses>
                    <TitleCourse>Cursos técnicos</TitleCourse>
                    {ListOfCourses.map(({img,text})=>{
                            return(
                                <CardCouser image={img} text={text} />
                            )
                        })
                    }
                </Courses>



        </Container>
     );
}
 
export default Home;