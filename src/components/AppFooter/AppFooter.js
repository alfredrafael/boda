import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {StyledFooter} from './StyledFooter';
 

const AppFooter = () => {
return(
    <React.Fragment>
    <StyledFooter className="footer">
    <Container>

    <Row>
      
    <Col>
    <br/>
    <img style={{maxWidth: '25%'}} src='https://alfredorafael.com/wp-content/uploads/2019/02/whileLogoName-e1551079673184.png'/>
    </Col>
    
    <Col>
    </Col>
    
    <Col>
    </Col>
    
    </Row>
    </Container>

  </StyledFooter>
    </React.Fragment>
)}

export default AppFooter;

