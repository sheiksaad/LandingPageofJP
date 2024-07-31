import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero2 from '../assets/JWP Images/image.jpg';
import './Section3.modules.css'

const Section3 = () => {
  return (
    <>
      <section className="text-secondary py-5">
        <div className="container text-center">
          <div className="col-lg-6 col-md-8 mx-auto">
            <img
              className="rounded-circle mx-auto d-block"
              height="200"
              width="200"
              src={Hero2}
              alt=""
            />
            <span className="d-block bg-primary mx-auto my-4" style={{ height: '4px', width: '40px' }}></span>
            <h2 className="text-dark font-weight-medium title-font tracking-wider text-uppercase">
              Muhammad Ali Mughal
            </h2>
            <p className="text-muted">Founder of Jawan Pakistan</p>
          </div>
          <br />
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-quote mb-4"
              width="3em"
              height="3em"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 3a2.5 2.5 0 1 1-2 4h.5A2.5 2.5 0 1 1 1 7.5H0a3.5 3.5 0 1 0 3.5-4.5zm10 0a2.5 2.5 0 1 1-2 4h.5A2.5 2.5 0 1 1 11 7.5h-1a3.5 3.5 0 1 0 3.5-4.5z"/>
            </svg>
            <p className="lead" id='lead'>
              We aim to be the most efficient provider of business process outsourcing services <br /> by setting the industry standards for cost and quality of services. Our long <br />term success will be driven by our relentless focus on recruiting and <br />developing the most talented pool of human capital in our industry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
