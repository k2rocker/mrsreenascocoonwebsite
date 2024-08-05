import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Forms.css';


export const Forms = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qe4x29a', 'template_oc8ay0b', form.current, {
        publicKey: 'p3kmq-Euk-4gqUbJ-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Thank You for showing interest ! Our team shall contact you soon.");
          form.current.reset();
        },
        (error) => {
          alert("There was error connecting to servers. Kindly try after some time. Sorry for the inconvinience")
          console.log('FAILED...', error.text);
          form.current.reset();
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Phone Number</label>
      <textarea name="phonenumber" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};