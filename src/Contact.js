import React, { useEffect, useState } from 'react';
import './App.css';
import { send } from 'emailjs-com';
import linkedin from './images/linkedin.png';
import github from './images/github.png';

// service_37egcdq

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const [isShown, setIsShown] = useState('alert alert-primary alert-dismissible fade show d-none');
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (toSend.from_name.length === 0 || toSend.message.length === 0 || toSend.reply_to.length === 0) {
            setError('Please include name, email, and a message.')

        } else {
            try {
                await send('service_37egcdq',
                    'template_tndlbyf',
                    toSend,
                    'user_xb1j08U4pypEFi4bBYciI');
                console.log('success!');
                setToSend({
                    from_name: '',
                    message: '',
                    reply_to: '',
                });
                setIsShown('alert alert-primary alert-dismissible fade show d-block');
                setError('');
            } catch (err) {
                console.log('failed', err);
            }
        }


    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    useEffect(() => {

    }, [isShown, error]);


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