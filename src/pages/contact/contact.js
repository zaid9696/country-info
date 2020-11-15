
import React from 'react';

import contactPage from '../../assets/contactpage.png';
import email from '../../assets/email.svg';
import website from '../../assets/website.svg';
import twitter from '../../assets/twitter.svg';

import './contact.styles.scss';

const Contact = () => (

    <div className="contact" style={{
      backgroundImage: `url(${contactPage})`
    }}>
        <h1>Contact Page</h1>
        <div className="contact__content">
            <div className="contact__info">
                <img src={website} alt="icon" />
                <a href="https://zaid-dev.com/">https://zaid-dev.com</a>
            </div>
            <div className="contact__info">
                <img src={email} alt="icon" />
                <a href="mailto:zaidinquiry96@gmail.com">zaidinquiry96@gmail.com</a>
            </div>
            <div className="contact__info">
                <img src={twitter} alt="icon" />
                <a href="https://twitter.com/zaiddev96">@zaiddev96</a>
            </div>
        </div>
    </div>

);

export default Contact;
