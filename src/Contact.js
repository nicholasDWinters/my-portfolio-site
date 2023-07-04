import './App.css';
import linkedin from './images/linkedin.png';
import github from './images/github.png';

const Contact = () => {

    return (
        <div className='col-lg-8 ms-lg-4'>

            
            <h3 className='display-6 mb-3'>Nick Winters</h3>
            <div className=''>

                <a className='fs-5 Resume-link me-5' href='https://drive.google.com/file/d/1fn93nbCyWzC9cP9NqzjoiW7KnWd23gT_/view?usp=sharing' target='_blank' rel='noreferrer'>My Resume</a>
                <a className='fs-5 Resume-link me-5' href='https://www.linkedin.com/in/nicholasdwinters/' target='_blank' rel='noreferrer'><img alt='linkedin' src={linkedin} style={{ height: '40px' }}></img></a>
                <a className='fs-5 Resume-link me-5' href='https://github.com/nicholasDWinters' target='_blank' rel='noreferrer'><img alt='linkedin' src={github} style={{ height: '40px' }}></img></a>
                <a className='fs-5 Resume-link d-block mt-3' href='https://drive.google.com/file/d/1ZEcHQkcL98YdSN0OXAr0aCSpAQU6jL6Y/view?usp=sharing' target='_blank' rel='noreferrer'>Certificate - Springboard Software Engineering Career Track</a>
                <h4 className='fs-5 text-muted mt-5 fw-normal'>Think I might be a good fit at your company? <a href="mailto:nicholas.d.winters@gmail.com">Send me an email!</a></h4>
                

            </div>

        </div>
    )
}

export default Contact;