import React from 'react';
import headshot from './images/headshot.jpg';
import './App.css';

const About = () => {
    return (
        <div className='col-lg-8 ms-4'>
            <h3 className='display-6'>About Me</h3>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-7'>
                    <p className='lead'>My name is Nick Winters, and I'm an emerging software engineer with a passion for web development. I've worked in the golf industry for close to 15 years, with management positions for the last 6 years.</p>
                    <p className='About-paragraph'>
                        I enjoyed my time in the golf industry, but was prompted by the 2020 pandemic to consider other, potentially more fulfilling opportunities. I had taken some web development online courses in the past, and have a strong passion for learning and problem solving. This sparked me to pursue a career in software engineering in 2021, and thanks to the 800+ hour software engineering curriculum at Springboard (graduated in August of 2021), my technical proficiencies include:
                    </p>
                    <p className='About-paragraph'>
                        HTML, CSS, Javascript, jQuery, DOM Manipulation, TDD, OOP, Bootstrap, Python, Flask, SQL, PostgreSQL, Node, Express, MongoDB, React, Redux, UI/UX design
                    </p>
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
                    <img className='img-fluid mb-3' style={{ borderRadius: '20%' }} src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/125262869_3755981094454738_6877473329872575308_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=84a396&_nc_ohc=36YRjKMpnncAX-Ubi6q&tn=2P7imhnlIW669YDk&_nc_ht=scontent-msp1-1.xx&oh=c671ea0999d1692617adf3c342bb07fd&oe=61435C7C' alt='nick,filipe,will'></img>
                </div>
            </div>
        </div>
    )
}

export default About;