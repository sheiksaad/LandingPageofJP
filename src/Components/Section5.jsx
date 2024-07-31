import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../assets/JWP Images/261862704_10223371448265775_2300299709412093131_n (1).jpg';
import img2 from '../assets/JWP Images/155332906_247925270211672_3618235991589928653_n.jpg';
import img3 from '../assets/JWP Images/261988743_10223366848350780_4227756947042582881_n.jpg';
import img4 from '../assets/JWP Images/212511411_10222634570404289_7247003591892091335_n.jpg';
import img5 from '../assets/JWP Images/209537914_10222634542963603_4251492512510579905_n.jpg';
import img6 from '../assets/JWP Images/261542477_10223366846270728_9568039485316705_n.jpg';
import './Section5.css'

const Section5 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <Container className="py-4">
          <div className="text-center py-5 mb-4">
            <h4 className='sec5h'>Glimpses of sessions conducted by Jawan Pakistan</h4>
          </div>
          <div>
          <Row>
            <Col md={6}>
              <Row>
                <Col md={6} className="p-2">
                  <img alt="gallery" className="img-fluid" src={img1} />
                </Col>
                <Col md={6} className="p-2">
                  <img alt="gallery" className="img-fluid" src={img2} />
                </Col>
                <Col className="p-2">
                  <img alt="gallery" className="img-fluid" src={img3} />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col className="p-2">
                  <img alt="gallery" className="img-fluid" src={img4} />
                </Col>
                <Col md={6} className="p-2">
                  <img alt="gallery" className="img-fluid" src={img5} />
                </Col>
                <Col md={6} className="p-2">
                  <img alt="gallery" className="img-fluid" src={img6} />
                </Col>
              </Row>
            </Col>
          </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Section5;
