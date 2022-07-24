import React from 'react';
import './Contact.scss';

import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("myyorbor");
    return (
        <div id="contact">
            <div className="contact-form">
                <span>Drop me a line. I would like to hear from you.</span>
                <form onSubmit={handleSubmit}>
                    <h2>Get in Touch</h2>
                    <input type="text" placeholder="Name" required/>
                    <input type="email" name="email" placeholder="Email" required/>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting || state.succeeded}>Send Message</button>
                    {state.succeeded && <p id="success">Thanks for submitting!</p>}
                </form>
            </div>
        </div>
    );
}

export default Contact;