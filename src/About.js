import React from 'react';
import headshot from './images/headshot.jpg';
import willNickFilipe from './images/willNickFilipe.jpg';
import './App.css';

const About = () => {
    return (
        <div className='col-lg-8 ms-lg-4'>
            <h3 className='display-6'>About Me</h3>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-7'>
                    <h4 className='lead'>My name is Nick Winters, and I'm an emerging software engineer with a passion for web development. I've worked in the golf industry for close to 15 years, with management positions for the last 6 years.</h4>
                    <p className='About-paragraph'>
                        I enjoyed my time in the golf industry, but was prompted by the 2020 pandemic to consider other, potentially more fulfilling opportunities. I had taken some web development online courses in the past, and have a strong passion for learning and problem solving. This sparked me to pursue a career in software engineering in 2021, and thanks to the 800+ hour curriculum at Springboard (graduated in August of 2021), my technical proficiencies include:
                    </p>

                    <h6 className='About-paragraph fw-light'>
                        HTML, CSS, Javascript, React, Redux, Bootstrap, Node, Express, Python, Flask, SQL, PostgreSQL, MongoDB, UI/UX design, OOP, TDD
                    </h6>
                </div>
                <div className='col-lg-5'>
                    <img className='img-fluid mb-3' style={{ borderRadius: '20%' }} src={headshot} alt='nick headshot'></img>
                </div>
            </div>
            <div className='row d-flex align-items-center justify-content-center'>
                <div className='col-lg-7'>
                    <p className='About-paragraph'>In my free time, I enjoy working on websites for friends, playing video games, playing golf, and practicing Jiu Jitsu. I've been practicing Jiu Jitsu now for roughly 2.5 years, and am extremely passionate about it. Martial arts has taught me how to protect myself and the ones I love, but also how to solve difficult problems and stay calm in stressful scenarios.</p>
                </div>
                <div className='col-lg-5'>
                    <img className='img-fluid mb-4' style={{ borderRadius: '20%' }} src={willNickFilipe} alt='nick,filipe,will'></img>
                </div>
            </div>
        </div>
    )
}

export default About;