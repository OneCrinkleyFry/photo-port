import React, { useState } from 'react';

function ContactForm() {

   const [formState, setFormState] = useState({ name: '', email: '', message: ''});

   const { name, email, message } = formState;

   return (
      <section>
         <h1>Contact Me</h1>
         <form id='contact-form'>
            <div>
               <label htmlFor='name' style={{visibility: 'hidden', display: 'none'}}>Name:</label>
               <input type='text' name='name' placeholder='Name' defaultValue={name} />
            </div>
            <div>
               <label htmlFor='email' style={{visibility: 'hidden', display: 'none'}}>Email:</label>
               <input type='email' name='email' placeholder='Email' defaultValue={email}/>
            </div>
            <div>
               <label htmlFor='message' style={{visibility: 'hidden', display: 'none'}}>Message:</label>
               <textarea name='message' placeholder='Message:' defaultValue={message}/>
            </div>
            <button type='submit'>Submit</button>
         </form>
      </section>
   );
}

export default ContactForm;