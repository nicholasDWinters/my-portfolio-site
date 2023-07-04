import React from 'react';
import headshot from './images/headshot.jpg';
import mma from './images/mma.jpg';
import './App.css';

const About = () => {
    return (
        <div className='col-lg-8 ms-lg-4'>

            <h3 className='display-6'>About Me</h3>
                    <h4 className='lead'>My name is Nick Winters, and I'm an emerging software engineer with a passion for web development. I had worked in the golf industry for close to 15 years, with management positions for the last 6 years.</h4>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-7'>
                    <p className='About-paragraph'>
                        I enjoyed my time in the golf industry, but was prompted by the 2020 pandemic to consider other, potentially more fulfilling opportunities. This sparked me to pursue a career in software engineering in 2021, and I completed the Springboard Software Engineering Career Track in August of 2021.
                    </p>
                    <p className='About-paragraph'>
                        Now, I work for Array as a software engineer, where I build web components using Svelte.
                    </p>

            
                </div>
                <div className='col-lg-5'>
                    <img className='img-fluid mb-3' style={{ borderRadius: '20%' }} src={headshot} alt='nick headshot'></img>
                </div>
            </div>
            <div className='row d-flex align-items-center justify-content-center mt-3'>
                <div className='col-lg-7'>
                    <p className='About-paragraph'>In my free time, I enjoy working on websites for friends, playing video games, playing golf, and practicing Jiu Jitsu. I've been learning Jiu Jitsu and MMA now for roughly 4.5 years, and am extremely passionate about it. Martial arts has taught me how to protect myself and the ones I love, but also how to solve difficult problems and stay calm in stressful scenarios.</p>
                </div>
                <div className='col-lg-5'>
                    <img className='img-fluid mb-4' style={{ borderRadius: '20%' }} src={mma} alt='nick,filipe,will'></img>
                </div>
            </div>
        </div>
    )
}

export default About;