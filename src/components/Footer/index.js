import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import '../Footer/Style.css';
import '../Footer/Style-Responsive.css';
import '../../Assets/Css/Components/Buttons.css';

function Footer() {
  return (
    <Container fluid className="Background">
      <Container>
        <Row>
          <Col md={12} className="Section">
            <h1 style={{marginBottom: 150}}> People who are <br />ready took these courses!</h1>
            <Link to="#" className="Button-white">Request Demo</Link>

            <div className="Footer-Grid" style={{ marginTop: 150}}>
                <article>
                    <p>Payme</p>
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </article>

                <article>
                    <ul>
                      <li><Link to="#">Request Demo</Link></li>
                      <li><Link to="#">Overons</Link></li>
                      <li><Link to="#">Social Media</Link></li>
                      <li><Link to="#">Counters</Link></li>
                      <li><Link to="#">Contact</Link></li>
                    </ul>
                </article>

                
                <article>
                    <ul>
                      <li><Link to="#">Company</Link></li>
                      <li><Link to="#">Terms & Conditions</Link></li>
                      <li><Link to="#">Social Media</Link></li>
                      <li><Link to="#">Privacy Policy</Link></li>
                      <li><Link to="#">Contact</Link></li>
                    </ul>
                </article>


                <article>
                    <ul>
                      <li><Link to="#">Get in touch</Link></li>
                      <li><Link to="#">Crechterwoord K12 182 DK Alknjkcb</Link></li>
                      <li><Link to="#">085-132567</Link></li>
                      <li><Link to="#">085-132567</Link></li>
                      <li><Link to="#">info@payme.net</Link></li>
                    </ul>
                </article>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
