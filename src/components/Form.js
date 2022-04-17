
import React from 'react';
import emailjs from 'emailjs-com';

import './Form.scss';



export default function Form() {


const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c0s2wxl', 'template_utd5ebb', e.target, 'user_OEFKPa3dOl4oWzSZ5BuOW')
      .then((result) => {
        alert('Thank you, your message has beeen sent!', result.text);
        window.location.reload()
      }, (error) => {
        alert('Oops... there was an error! Your message has not been sent, please try again!', error.text);
        window.location.reload()
      });
  }

  return (
    <>
      <div className="page" id="page"></div>
    <form className="contact-form" id="form" onSubmit={sendEmail}>

    
      <input type="text" name="user_name" placeholder="Name" id="name" required/>
      <input type="text" name="user_phone_number" placeholder="Contact Number" id="number" required/>
      <input type="email" name="user_email" placeholder="Email Address" id="email" required/>
      <textarea name="message" placeholder="Message"id="message" required/>
      <input type="submit" value="Send!" id="button" />
    </form>
    </>
  );
}