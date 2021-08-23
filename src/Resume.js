import React from 'react';
import './App.css';

const Resume = () => {
    return (
        <div className='col-lg-8 ms-lg-4 mb-3'>
            <h3 className='display-6'>My Resume</h3>
            <a className='fs-4 Resume-link' href='https://drive.google.com/file/d/1Zc0gukJdWSQsWp_I8AIskJc7wEqtiHJ_/view?usp=sharing' target='_blank' rel='noreferrer'>View PDF</a>
            <div className='row d-flex align-items-center mt-3'>
                <div className='col-lg-8 mt-2'>
                    <h4 className='lead fs-3 Resume-heading'>Skills</h4>
                    <h6 className='fw-normal lh-base'>Software Engineering - <span className='text-muted'> HTML, CSS, Javascript, DOM, React, Redux, Node.js, Express.js, Python, Flask, SQL, PostgreSQL, TDD, OOP, UI/UX</span></h6>
                    <h6 className='mt-4 fw-normal lh-base'>Industry - <span className='text-muted'> Strategic Planning, Social Media Management, Event Management, Customer Service, Public Speaking, Team Management</span></h6>

                </div>
                <div className='col-lg-4 mt-3 mb-3'><i className="fas fa-tools fa-9x"></i></div>
            </div>
            <div className='row d-flex align-items-center'>
                <div className='col-lg-8'>
                    <h4 className='lead fs-3 Resume-heading mt-3'>Education</h4>
                    <h6 className='fw-normal lh-base'>Springboard Software Engineering Career Track - <span className='text-muted'>Feb. 2021 - Aug. 2021</span><br></br>
                        <span className='text-muted'>Received Certification in August of 2021 </span><a className='fs-5 Resume-link' href='https://drive.google.com/file/d/1ZEcHQkcL98YdSN0OXAr0aCSpAQU6jL6Y/view?usp=sharing' target='_blank' rel='noreferrer'>View Certificate</a>
                    </h6>
                    <h6 className='mt-4 fw-normal lh-base'>University of Wisconsin Oshkosh - <span className='text-muted'>2010 - 2012</span><br></br>
                        <span className='text-muted'>Bachelor of Business Administration - emphasis in Economics</span>
                    </h6>
                    <h6 className='mt-4 fw-normal lh-base'>University of Wisconsin Fond du Lac- <span className='text-muted'>2008 - 2010</span><br></br>
                        <span className='text-muted'>Associate's Degree - General Studies</span>
                    </h6>

                </div>
                <div className='col-lg-4 mt-3 mb-3'><i className="fas fa-user-graduate fa-9x"></i></div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <h4 className='lead fs-3 Resume-heading mt-3'>Work History</h4>
                    <h6 className='fw-normal lh-base'>Fellow, Springboard Software Engineering Career Track - <span className='text-muted'>Feb. 2021 - Aug. 2021</span>
                    </h6>
                    <ul className='text-muted'>
                        <li>700+ hours of hands-on course material, with 1:1 industry expert mentor oversight, and completion of 4 in-depth portfolio projects. Mastered skills in front-end and back-end web development, databases, data structures, and algorithms.</li>
                        <li>
                            Created 2 Capstone Projects (further detailed in the projects section) with a topic of my choosing, and 2 cumulative projects with an emphasis on the recent technologies studied in the curriculum.
                        </li>
                    </ul>
                    <h6 className='fw-normal lh-base'>Clubhouse Manager, Fairfield Hills Golf Course - <span className='text-muted'>Jan. 2017 - Dec. 2020</span>
                    </h6>
                    <ul className='text-muted'>
                        <li>Managed all Clubhouse operations, including scheduling, payroll, purchasing, and inventory functions</li>
                        <li>
                            In 2020, was responsible for a 15% increase in gross revenue, all while decreasing our payroll cost
                        </li>
                        <li>Managed the golf course Wordpress website and social media pages</li>
                        <li>Created over 50 episodes of 'The Sunday Swing', a weekly golf video series</li>
                    </ul>
                    <h6 className='fw-normal lh-base'>Assistant Golf Professional, Monona Golf Course - <span className='text-muted'>Jan. 2016 - Nov. 2016</span>
                    </h6>
                    <ul className='text-muted'>
                        <li>Managed 8 person staff with an emphasis on customer service, efficiency, and profitability</li>
                        <li>
                            Manager of both the food & beverage, and golf shop operations
                        </li>
                        <li>Effectively advertised operations of the Club, using social media and in-house marketing</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Resume;