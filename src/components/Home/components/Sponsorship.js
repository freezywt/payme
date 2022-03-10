import React from 'react';
import { Container } from 'react-bootstrap';

import Planday from '../../../Assets/images/Sponsors/Planday.png';
import Umbraco from '../../../Assets/images/Sponsors/umbraco.png';
import PearlFisher from '../../../Assets/images/Sponsors/PearlFisher.png';
import BrightPearl from '../../../Assets/images/Sponsors/brightpearl.png';

import '../components/Css/Sponsorship.css';

function Sponsorship() {
  return (
    <Container fluid className="SponsorShipBackground" id="about">
      <Container className="SponsorShipBackground" >
        <img src={Planday}/>
        <img src={Umbraco}/>
        <img src={PearlFisher}/>
        <img src={BrightPearl}/>
        <img src={Planday}/>
      </Container>
    </Container>
  );
}
export default Sponsorship;
