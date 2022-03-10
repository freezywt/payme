import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Css/Pricing.css';
import '../../../Assets/Css/Components/Buttons.css';

function Pricing() {
  return (
    <Container fluid className="Pricing-Background" style={{ backgroundColor: '#fff'}}>
      <Container>
        <Row>
          <Col md={12} className="Pricing-Content">
            <h1 style={{ fontSize: '2.6em', color: '#313131' }}>Our{' '}<span className="services-bold">Features</span></h1>
            <div className="Pricing-Grid ">
                <article>
                    <p style={{ fontSize: '20px', fontWeight: 'bold'}}>For Starter</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold'}}>$59</p>
                    <ul>
                      <li>Feedback Categorization</li>
                      <li>Features prioritization</li>
                      <li>Real-time collaboration</li>
                      <li>Feedback loop notifications</li>
                      <li>Essential dev tools integrations</li>
                    </ul>
                    <Link to="#" className="Button-without-background" style={{textAlign: 'center'}}>Request Demo</Link>
                </article>

                <article>
                    <p style={{ fontSize: '20px', fontWeight: 'bold'}}>For Teams</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold'}}>$99</p>
                    <ul>
                      <li>Feedback Categorization</li>
                      <li>Features prioritization</li>
                      <li>Real-time collaboration</li>
                      <li>Feedback loop notifications</li>
                      <li>Essential dev tools integrations</li>
                    </ul>
                    <Link to="#" className="Button-with-background" style={{textAlign: 'center'}}>Request Demo</Link>
                </article>

                <article>
                    <p style={{ fontSize: '20px', fontWeight: 'bold'}}>For Company</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold'}}>Custom</p>
                    <ul>
                      <li>Feedback Categorization</li>
                      <li>Feedback loop notifications</li>
                      <li>Essential dev tools integrations</li>
                    </ul>
                    <Link to="#" className="Button-without-background" style={{textAlign: 'center'}}>Contact Us</Link>
                </article>
            </div>
           </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Pricing;
