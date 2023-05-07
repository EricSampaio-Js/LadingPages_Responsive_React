


import Logo1 from './../../image/logo1.png'

import IconIstagram from '../../icones/InstagramLogo.svg'
import IconFacebook from '../../icones/FacebookLogo.svg'
import IconLinkedin from '../../icones/LinkedinLogo.svg'

import {
    Nav,
    Logo,
    Menu, 
    IconSocials,
} from './style';


const NavBar = () => {
    return ( 
        <Nav>
            <Logo src={Logo1}/>
            <Menu>
                {/* <MenuMobile /> */}

                <li>Início</li>
                <li>Cursos</li>
                <li>Vagas</li>
                <li>Notícias</li>
                <li>Contato</li>

            </Menu>
            <IconSocials>
                <img src={IconIstagram} alt="" />
                <img src={IconFacebook} alt="" />
                <img src={IconLinkedin} alt="" />
            </IconSocials>
        </Nav>
     );
}
 
export default NavBar;