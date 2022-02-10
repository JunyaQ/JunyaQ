import React, { useState } from 'react';
import Footer from '../Footer';
import{Form, Input, Button, TextArea} from 'semantic-ui-react';
import './style.css'

import emailjs from 'emailjs-com';
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;
emailjs.init(USER_ID);
function Contact(){
      
       console.log(SERVICE_ID);
       console.log(TEMPLATE_ID);
       console.log(USER_ID);
      const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target)
          .then((result) => {
            console.log(result.text);
            alert("successfully submited")
          }, (error) => {
            console.log(error.text);
            alert("Something went wrong")
          });
        e.target.reset()
      };
   
 
    return(
<section className='formsection'>
      <Form onSubmit={handleSubmit}>
        <Form.Field
        id='email'
        control={Input}
        label='Email'
        name='user_email'
        placeholder='please enter your email'
        required={true}/>

        <Form.Field
        id='name'
        control={Input}
        label='Name'
        name='user_name'
        placeholder='please enter your name'
        required={true}/>

        <Form.TextArea
        id='message'
        label='Message'
        control={TextArea}
        name='user_message'
        rows='15'
        placeholder='Thank you for leaving me a message'
        required={true}
        />
        <Button type='submit' color='green'>Send Message</Button>
      </Form>
      
      <footer className="footer">
      <Footer></Footer>
      </footer>
    </section>
    )
}

export default Contact;