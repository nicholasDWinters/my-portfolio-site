import React from 'react';
import './App.css';
import jjSource from './images/jjSource.png';
import fbjjPic from './images/fbjjPic.png';
import realtyPic from './images/realtyPic.png';


const Projects = () => {
    return (
        <div className='col-lg-8 ms-lg-4'>
            <h3 className='display-6'>My Projects</h3>

            <div className='row d-flex align-items-center mt-5'>
                <div className='col-lg-5'>
                    <h4 className='lead fs-3 Resume-heading mb-3'>Filipe Barbosa Jiu Jitsu</h4>
                    <p className=''>
                        Site for Filipe Barbosa Brazilian Jiu Jitsu Academy in Baraboo, WI.
                    </p>
                    <p className=''>
                        Tools used: React, JavaScript, Bootstrap, Heroku<br></br>
                        <a className='fs-5 Resume-link me-4' href='https://github.com/nicholasDWinters/filipe-barbosa-bjj.git' target='_blank' rel='noreferrer'>Source Code</a>
                        <a className='fs-5 Resume-link me-4' href='https://www.bjjwisconsin.com' target='_blank' rel='noreferrer'>Deployed Site</a>
                    </p>
                </div>
                <div className='col-lg-7'>

                    <img className='img-fluid' style={{ borderRadius: '10%' }} alt='filipe barbosa site pic' src={fbjjPic}></img>
                </div>



            </div>
            <div className='row d-flex align-items-center mt-5'>
                <div className='col-lg-5'>
                    <h4 className='lead fs-3 Resume-heading mb-3'>Realty Questionnaire</h4>
                    <p className=''>
                        Simple site used for questioning potential realty clients.
                    </p>
                    <p className=''>
                        Tools used: React, JavaScript, Bootstrap, LocalStorage, AWS<br></br>
                        <a className='fs-5 Resume-link me-4' href='https://github.com/nicholasDWinters/realty-questionnaire' target='_blank' rel='noreferrer'>Source Code</a>
                        <a className='fs-5 Resume-link me-4' href='https://master.d3f023y2opanpd.amplifyapp.com/' target='_blank' rel='noreferrer'>Deployed Site</a>
                    </p>
                </div>
                <div className='col-lg-7'>

                    <img className='img-fluid' style={{ borderRadius: '10%' }} alt='realty questionnaire site pic' src={realtyPic}></img>
                </div>



            </div>

            <div className='row d-flex align-items-center mt-5'>
                <div className='col-lg-5'>
                    <h4 className='lead fs-3 Resume-heading mb-3'>My News</h4>
                    <p className=''>
                        Minimalist News website allowing registered users to save stories to their read list. Shows 20 recent articles about topic of user's choosing. <span className='text-danger'>Unfortunately, the News API doesn't allow free use in production apps, so my deployed site no longer functions. If curious to see a full version, please clone frontend and backend repos and register for an API key at </span><a href='https://newsapi.org/' target='_blank' rel='noreferrer'>https://newsapi.org/</a>
                    </p>
                    <p className=''>
                        Tools used: React, Redux, Node, Express, PostgreSQL, News API, Bootstrap, Heroku<br></br>
                        <a className='fs-5 Resume-link me-4' href='https://github.com/nicholasDWinters/capstone-2-my-news-frontend.git' target='_blank' rel='noreferrer'>Front End Code</a>
                        <a className='fs-5 Resume-link me-4' href='https://github.com/nicholasDWinters/capstone-2-my-news-backend.git' target='_blank' rel='noreferrer'>Back End Code</a>

                    </p>


                </div>
                <div className='col-lg-2'></div>
                <div className='col-lg-4 mt-3 mb-3'><i class="far fa-newspaper fa-9x"></i></div>
            </div>

            <div className='row d-flex align-items-center mt-5 mb-5'>
                <div className='col-lg-5'>
                    <h4 className='lead fs-3 Resume-heading mb-3'>Jiu Jitsu Source</h4>
                    <p className=''>
                        Site used by Jiu Jitsu practitioners to learn new techniques and keep notes on their training sessions.
                    </p>
                    <p className=''>
                        Tools used: Python, Flask, PostgreSQL, SQLAlchemy, Youtube Data API, Heroku<br></br>
                        <a className='fs-5 Resume-link me-4' href='https://github.com/nicholasDWinters/capstone_1' target='_blank' rel='noreferrer'>Source Code</a>
                        <a className='fs-5 Resume-link me-4' href='https://jiu-jitsu-source.herokuapp.com/' target='_blank' rel='noreferrer'>Deployed Site</a>
                    </p>


                </div>
                <div className='col-lg-7 mt-3 mb-3'><img className='img-fluid' style={{ borderRadius: '10%' }} alt='jiu jitsu source pic' src={jjSource}></img></div>
            </div>
        </div>
    )
}

export default Projects;