import React, { useState } from 'react';
import Footer from '../Footer';
import{Form, Input, Button, TextArea} from 'semantic-ui-react';
import './style.css'

function Contact(){
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
     const { name, email, message } = formState;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          setFormState({ [e.target.name]: e.target.value });
          console.log('Form', formState);
        }
      };
   
 
    return(
<section className='formsection'>
      {/* <h1 className='contactme'>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div> 
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email}  />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form> */}
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
        control={Input}
        label='Message'
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