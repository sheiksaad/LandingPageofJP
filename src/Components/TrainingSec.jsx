import React from 'react';
import Web from '../assets/JWP Images/252-2527672_mobile-application-development-mobile-app-and-web-development.png';
import App from '../assets/JWP Images/download.jfif';
import Graphic from '../assets/JWP Images/learn-graphic-design.jpg';
import Digital from '../assets/JWP Images/blog-image-Soical-media-v-digital.png';
import Block from '../assets/JWP Images/blockchain.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TrainingSec.css'; // Import your CSS file

const TrainingSec = () => {
  return (
    <>
      <section id="training" className="text-gray-600 body-font" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
        <div className="container px-5 py-24 mx-auto">
          <div className="heading2 container px-5 py-24 text-center justify-center text-white hearderset2">
            <h4>IT Trainings offering in Jawan Pakistan</h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4"  >
              <div className="card h-100 text-center" id='cards'>
                <a className="service-image" href="./webandmobile.html">
                  <img alt="team" className="card-img-top rounded-lg mb-4" src={Web} />
                </a>
                <div className="card-body">
                  <h5 className="card-title text-gray-900">Web and Mobile Application Development</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4"  id='cards'>
              <div className="card h-100 text-center">
                <a className="service-image" href="./flutter.html">
                  <img alt="team" className="card-img-top rounded-lg mb-4" src={App} />
                </a>
                <div className="card-body">
                  <h5 className="card-title text-gray-900">Flutter Mobile Application Development</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-4 mb-4"  id='cards'>
              <div className="card h-100 text-center">
                <a className="service-image" href="./graphic.html">
                  <img alt="team" className="card-img-top rounded-lg mb-4" src={Graphic} />
                </a>
                <div className="card-body">
                  <h5 className="card-title text-gray-900">Graphic Design And Video Editing</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-4 mb-4"  id='cards'>
              <div className="card h-100 text-center">
                <a className="service-image" href="./digitalmarketing.html">
                  <img alt="team" className="card-img-top rounded-lg mb-4" src={Digital} />
                </a>
                <div className="card-body">
                  <h5 className="card-title text-gray-900">Digital And Social Media Marketing</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4 mb-4"  id='cards'>
              <div className="card h-100 text-center">
                <a className="service-image" href="./blockchain.html">
                  <img alt="team" className="card-img-top rounded-lg mb-4" src={Block} />
                </a>
                <div className="card-body">
                  <h5 className="card-title text-gray-900">BlockChain Development</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrainingSec;
