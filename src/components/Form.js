
import React from 'react';
import emailjs from 'emailjs-com';

import './Form.scss';



export default function Form() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_c0s2wxl', 'template_utd5ebb', e.target, 'user_OEFKPa3dOl4oWzSZ5BuOW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
      <div className="page" id="page">
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
    
      <input type="text" name="user_name" placeholder="Name"/>
      <input type="text" name="user_phone_number" placeholder="Contact Number" />
      <input type="email" name="user_email" placeholder="Email Address"/>
      <textarea name="message" placeholder="Message" />
      <input type="submit" value="Send" id="button"/>
    </form>
    </div>
  );
}