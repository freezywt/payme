import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Css/Faq.css';

function Faq() {
  return (
    <Container fluid className="Faq-Background">
      <Container>
        <Row>
          <Col md={12} className="Faq-Content">
          <h1 style={{ fontSize: '2.6em', color: '#25A4AD', fontWeight: 'bold'}}>FAQs</h1>
            <div className='Faq-grid'>
                 <details>
                    <summary>she met humoured sir breeding her. Six curiosity day assurance bed necessary.</summary>
                    <p>Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                </details>
            </div>

            <div className='Faq-grid'>
                 <details>
                    <summary>And excellence partiality estimating terminated day everything?</summary>
                    <p></p>
                </details>
            </div>

            <div className='Faq-grid'>
                 <details>
                    <summary>Latter person am secure of estate genius at?</summary>
                    <p></p>
                </details>
            </div>

            <div className='Faq-grid'>
                 <details>
                    <summary>Whatever landlord yourself at by pleasure of children be?</summary>
                    <p></p>
                </details>
            </div>

           </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Faq;
