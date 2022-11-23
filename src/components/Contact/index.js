import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

  const [formState, setFormState] = useState({name: '', email: '', message: ''});
  const [errorMessage, setErrorMessage] = useState('');

  async function handleChange(e) {
    if(e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value});
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // JSX
  return (
    <section>
    <h1 data-testid = "title">Contact me</h1>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" defaultValue={formState.name} onBlur={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" defaultValue={formState.email} onBlur={handleChange}/>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" defaultValue={formState.message} rows="5" onBlur={handleChange} />
        {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
        )}
        <button data-testid = "submit" type="submit">Submit</button>
      </div>
    </form>
  </section>
  )
}

export default ContactForm;