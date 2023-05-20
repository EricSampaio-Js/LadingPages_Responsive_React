
import React,{useState} from 'react'

import Logo1 from './../../image/logo1.png'

import IconIstagram from '../../icones/InstagramLogo.svg'
import IconFacebook from '../../icones/FacebookLogo.svg'
import IconLinkedin from '../../icones/LinkedinLogo.svg'
import IconMobile from '../../icones/IconMobile.svg'
import {
    Nav,
    Logo,
    Menu, 
    IconSocials,
    MenuMobile
} from './style';


const NavBar = () => {

    const [activeMenuMobile, setActiveMenuMobile] = useState(false);

    const HandleActiveMenuMobile = () => {
        setActiveMenuMobile(current => !current);
    }

    return ( 
        <Nav>
            <Logo src={Logo1}/>
                <MenuMobile src={IconMobile} onClick={HandleActiveMenuMobile} />
            <Menu menuMobile={activeMenuMobile}>
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