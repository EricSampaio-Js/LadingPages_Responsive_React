

import IconLogo from '../../image/logo2.png';  
import IconEnvolopSimple from './../../icones/EnvelopeSimple.svg';
import IconPhone from './../../icones/Phone.svg';
import IconGlobe from './../../icones/GlobeHemisphereWest.svg';
import IconIstagram from '../../icones/InstagramLogo.svg'
import IconFacebook from '../../icones/FacebookLogo.svg'
import IconLinkedin from '../../icones/LinkedinLogo.svg'


import {
    LogoFooter,
    Contact,
    Sobre,
    RedSocial,
    TitleSobre,
    TextSobre,
    ContainerFooter
} from './style';


const Footer = () => {
    return ( 
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
                    
     );
}
 
export default Footer;