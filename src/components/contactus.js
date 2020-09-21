import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  
  function sendEmail(e) {
    e.preventDefault();

    const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const user= process.env.REACT_APP_EMAILJS_USERID;
    
  emailjs.sendForm("gmail", template, e.target, user)
        .then((result) => {
          window.location.reload()  
      }, (error) => {
          console.log(error.text);
      });
     
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message_html"/>
      <label></label>
      <input type="submit" value="Send" />
    </form>
  );
}
