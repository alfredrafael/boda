import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

} from 'reactstrap';
import { Link } from 'react-router-dom';
import { NavBarLogo } from './StyledNavbar';
import './CssNavbar.css';
import $ from 'jquery';

$(".navbar-fading-effect").css("background", "rgba(0, 0, 0, .8)");

// window.history.pushState({}, '', '/') //AMAZING

const Example = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    //$(".navbar-fading-effect").css("border-bottom", "1px solid rgba(0, 0, 0, .10)");

    window.onscroll = () => {
      var scrollStatus = $(window).scrollTop();
      if (scrollStatus > 318) {
        $(".navbar-fading-effect").css("background", "rgba(0, 200, 255, .5)"); // changes to...
        $(".navbar-fading-effect").css("transition", "1s");
        // $(".navbar-border-shadow").css("box-shadow", "0 5px 5px -2px rgba(0,0,0,.2) !important");
      } else {
        $(".navbar-fading-effect").css("background", "rgba(0, 0, 0, 0)"); // scrolls back not back to default-color, but this...
      }
    }
  });


  if (Navbar)

    return (
      <React.Fragment>
        <Navbar dark expand="md" sticky={'top'} className={!isOpen ? 'navbar-css navbar-fading-effect navbar-border-shadow' : 'makeTurquoise'}>
          <Container>  
          <NavbarBrand href="/">
              <img class="navbar-logo" alt="Suzy & Jose Logo" src={'https://alfredorafael.com/wp-content/uploads/2020/06/sj-white.png'} style={{ maxWidth: '17%' }} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} style={{visibility: 'hidden', marginBottom: '5%'}}/>
            {/*
             <Collapse isOpen={isOpen} navbar class={isOpen && 'makeTurquoise'}>  */}


             {/* 
             <Nav className="ml-auto" navbar>

                <NavItem className="nav-link hovered-link" id="about-link">
                <a href='/'>
                <img class="navbar-item" alt="about link-item" src={'https://alfredorafael.com/wp-content/uploads/2020/06/About-boda.png'} style={{float: 'right', maxWidth: '16%', padding: '0'}} />
                </a>
                </NavItem>


                <NavItem className="nav-link hovered-link" id="home-link">
                  <a href='/'>
                  <img class="navbar-item" alt="Home link-tiem" src={'https://alfredorafael.com/wp-content/uploads/2020/06/Home-boda.png'} style={{float: 'right', maxWidth: '16%', padding: '0'}} />
                  </a>
                </NavItem>

                
                </Nav>
               */}
                
 

              
              {/* <NavbarText>Simple Text</NavbarText> */}
           {/* </Collapse> */}
          </Container>
        </Navbar>
      </React.Fragment>
    );
}


export default Example;