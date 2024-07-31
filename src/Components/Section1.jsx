import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../assets/JWP Images/1.png';
import './Section1.modules.css';

const Section1 = () => {
    return (
        <section className="text-dark">
            <div className="container">
                <div className="intro">
                    <h1 id="headings">Introduction To<br />Jawan Pakistan</h1>
                    <p className="lead">
                        The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth.
                    </p>
                </div>
                <div className="img">
                    <img alt="hero" src={Hero} />
                </div>
            </div>
        </section>
    );
}

export default Section1;
