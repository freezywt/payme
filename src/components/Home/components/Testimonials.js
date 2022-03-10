import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Avatar from "../../../Assets/images/avatar.png";
import Stars from "../../../Assets/images/stars.png";

import '../components/Css/Testimonials.css';

function Testimonials() {
  return (
    <Container fluid className="Testimonials-Background" id="about">
        <h1 style={{ fontSize: "2.6em", textAlign: 'center' }}>What <span className="Testimonials-Title">Clients</span> Say</h1>
      <Container>
        <Row>
        <Col md={4} className="Testimonials-Avatar">
              <img src={Avatar} className="img-fluid" alt="Testimonials-Avatar" />
          </Col>
          <Col md={8} className="Testimonials-Container">
              <div className="Testimonials-Body">
                <p><strong>Best Developers</strong></p>
                <p>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.</p>
                <img src={Stars}/>
                <p>Robert Johnson</p>
                <p style={{fontSize: '13px'}}>Director at Behance</p>
              </div>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Testimonials;