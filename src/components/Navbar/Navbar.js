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

$(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .8)");

// window.history.pushState({}, '', '/') //AMAZING

const Example = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    $(".navbar-fading-effect").css("border-bottom", "1px solid rgba(4, 1, 130, .10)");

    window.onscroll = () => {
      var scrollStatus = $(window).scrollTop();
      if (scrollStatus > 115) {
        $(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .8)"); // changes to...
        $(".navbar-fading-effect").css("transition", "1s");
      } else {
        $(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .15)"); // scrolls back not back to default-color, but this...
      }
    }
  });


  if (Navbar)

    return (
      <React.Fragment>
        <Navbar dark expand="md" className="navbar-fading-effect navbar-border-shadow navbar-css" sticky={'top'}>
          <Container>
            <NavbarBrand href="/">
              <img class="navbar-logo" alt="Alfredo Rafael Logo" src={'https://alfredorafael.com/wp-content/uploads/2019/02/newWhite.png'} style={{ maxWidth: '34%' }} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>

                <NavItem className="nav-link hovered-link" id="home-link">
                  <a href='/'>
                    Home
                </a>
                </NavItem>

                <NavItem className="nav-link hovered-link">
                  <a href='/resume'>
                    Resume
            </a>
                </NavItem>

              </Nav>
              {/* <NavbarText>Simple Text</NavbarText> */}
            </Collapse>
          </Container>

        </Navbar>
      </React.Fragment>
    );
}


export default Example;