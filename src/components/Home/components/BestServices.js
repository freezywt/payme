import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hero from '../../../Assets/images/best-services.png';
import '../components/Css/BestServices.css';
import '../../../Assets/Css/Components/Buttons.css';

function BestServices() {
  return (
    <Container fluid className="BestServices-Background">
      <Container>
        <Row>
          <Col md={12} className="BestServices-Container">
            <h1 style={{ fontSize: '2.6em', color: '#313131' }}>Best{' '}<span className="services-bold">Services</span></h1>
            <p  style={{ color: '#313131' }}>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
            <img style={{marginTop: 100, width: '80%', height: '80%'}} src={Hero} />
           </Col>
        </Row>
        <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <Link to="#" className="Button-without-background button-margin" style={{textAlign: 'center', marginBottom: '110px'}}>Explore All</Link>
        </div>
      </Container>
    </Container>
  );
}
export default BestServices;
