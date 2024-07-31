import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero1 from '../assets/JWP Images/2.png';
import './Section2.modules.css';
const Section2 = () => {
  return (
   <>
    <section className="text-dark">
            <div className="container">
            <div className="img">
                    <img alt="hero" src={Hero1} />
                </div>
                <div className="intro">
                    <h1 id="headings">Mission And Vision<br />Behind Jawan Pakistan</h1>
                    <p className="lead">
                    Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed youth.</p>
                    <p className="lead">Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.</p>
                </div>
            </div>
        </section>
   </>
  )
}

export default Section2