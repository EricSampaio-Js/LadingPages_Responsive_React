import React from "react";

import LogoImg  from './../../assets/image/logo.svg';
import IconSearch from './../../assets/icon/iconSearch.svg';
import { Button } from './../Button';

import { 
    Container,
    Logo,
    Nav,
    Action,
    SearchIcon,
    
 } from "./style"

const NavBar = () => {
    return ( 
        <Container>
            <Logo src={LogoImg} />
            <Nav>
                <li>Home</li>
                <li>Courses</li>
                <li>Instuctors</li>
                <li>Schedules</li>
                <li>Contact Us</li>
            </Nav>
            
            <Action>
               <SearchIcon src={IconSearch} />
               <Button text={'Login'} configCss={'whiteColor'} />         
               <Button text={'Register'} configCss={'greenColor'}  />         
            </Action>
        </Container>
     );
}
 
export default NavBar;