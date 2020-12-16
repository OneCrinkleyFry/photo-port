import React from 'react';

function ContactForm() {
   return (
      <section>
         <h1>Contact Me</h1>
         <form id='contact-form'>
            <div>
               <label htmlFor='name' style={{visibility: 'hidden', display: 'none'}}>Name:</label>
               <input type='text' name='name' placeholder='Name' />
            </div>
            <div>
               <label htmlFor='email' style={{visibility: 'hidden', display: 'none'}}>Email:</label>
               <input type='email' name='email' placeholder='Email' />
            </div>
            <div>
               <label htmlFor='message' style={{visibility: 'hidden', display: 'none'}}>Message:</label>
               <textarea name='message' placeholder='Message:' />
            </div>
            <button type='submit'>Submit</button>
         </form>
      </section>
   );
}

export default ContactForm;