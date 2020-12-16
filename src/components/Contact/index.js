import React, { useState } from 'react';

function ContactForm() {

   const [formState, setFormState] = useState({ name: '', email: '', message: ''});

   const { name, email, message } = formState;

   function handleChange(e) {
      setFormState({...formState, [e.target.name]: e.target.value });
   }

   function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
   }

   return (
      <section>
         <h1>Contact Me</h1>
         <form id='contact-form' onSubmit={handleSubmit}>
            <div>
               <label htmlFor='name' style={{visibility: 'hidden', display: 'none'}}>Name:</label>
               <input type='text' name='name' placeholder='Name' defaultValue={name} onChange={handleChange} />
            </div>
            <div>
               <label htmlFor='email' style={{visibility: 'hidden', display: 'none'}}>Email:</label>
               <input type='email' name='email' placeholder='Email' defaultValue={email} onChange={handleChange} />
            </div>
            <div>
               <label htmlFor='message' style={{visibility: 'hidden', display: 'none'}}>Message:</label>
               <textarea name='message' placeholder='Message:' defaultValue={message} onChange={handleChange} />
            </div>
            <button type='submit'>Submit</button>
         </form>
      </section>
   );
}

export default ContactForm;