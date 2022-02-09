import React, { useState } from 'react';
import Footer from '../Footer';

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
<section>
      <h1 className='contactme'>Contact me</h1>
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
      </form>
      
      <footer className="footer">
      <Footer></Footer>
      </footer>
    </section>
    )
}

export default Contact;