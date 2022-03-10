import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import homeLogo from '../../../Assets/images/home-logo.png';
import '../components/Css/Hero.css';
import '../../../Assets/Css/Components/Buttons.css';

function Hero(){
    return(
        <Container fluid className="home-section" id="home">
            <Container className="home-content">
            <Row>
                <Col md={7} className="home-header">
                    <h1 className="Introduction-title">Providing</h1>
                    <h1 style={{paddingBottom: 10}} className="Introduction-title">Best</h1>
                    <h1 className="Introduction-bold">WEB Services</h1>

                    <div style={{ padding: 10, paddingLeft: 55, textAlign: 'left' }}>
                        <p style={{color: '#313131'}}>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                    </div>

                    <div style={{ padding: 20, paddingLeft: 55, textAlign: 'left', fontSize: 20 }}>
                        <Link to="#" className="Button-with-background Button-shaddow">Get Started</Link>
                        <Link to="#" className="Button-without-background" style={{marginLeft: 20}}>Explore</Link>
                        </div>
                    </Col>

                    <Col md={5} style={{ paddingBottom: 20 }}>
                    <img src={homeLogo} alt="home pic" className="img-fluid" />
                </Col>
            </Row>
            </Container>
        </Container>
    );
}

export default Hero;