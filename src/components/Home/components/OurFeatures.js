import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../components/Css/OurFeatures.css';

function OurFeatures() {
  return (
    <Container fluid className="OurFeaturesGrid-Container" style={{ backgroundColor: '#F8F8F8'}}>
      <Container>
        <Row>
          <Col md={12} className="OurFeaturesGrid-Content">
            <h1 style={{ fontSize: '2.6em', color: '#313131' }}>Our{' '}<span className="services-bold">Features</span></h1>
            <p  style={{ color: '#313131' }}>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
            <div className="OurFeaturesGrid">
                <article>
                    <p style={{color: '#25A4AD', fontSize: '20px', fontWeight: 'bold'}}>Work Load</p>
                    <p>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</p>
                    <Link to="#" className='link-with-color'>Learn More</Link>
                </article>

                <article>
                    <p style={{ fontSize: '20px', fontWeight: 'bold'}}>Time Tracking</p>
                    <p>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</p>
                    <Link to="#" className="link-without-color">Learn More</Link>
                </article>

                <article>
                    <p style={{ fontSize: '20px', fontWeight: 'bold'}}>Collaborations</p>
                    <p>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</p>
                    <Link to="#" className="link-without-color">Learn More</Link>
                </article>
            </div>
           </Col>
        </Row>
        <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <Link to="#" className="Button-without-background" style={{textAlign: 'center'}}>Explore All</Link>
           </div>
      </Container>
    </Container>
  );
}
export default OurFeatures;
