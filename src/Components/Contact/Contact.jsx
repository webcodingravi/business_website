import React from 'react';
import contactImage from '../../assets/contact/contact.jpg';
import './Contact.css';

function Contact() {
  return (
    <>
     <section id="contact">
        <div className="container">
            <div className="contact_wrapper">
                <div className="contact_col">
                    <div className="contact_image">
                    <img src={contactImage} alt="Contact" />
                    </div>
                    
                    </div>
                    <div className="contact_col">
                        <h2>Contact Us</h2>
                        <form>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Your Name..." autoComplete="off" />
                            </div>

                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Your Phone..." autoComplete="off" />
                            </div>

                            <div className="input_wrapper">
                                <input type="email" className="form-control" placeholder="Your Email..." autoComplete="off" />
                            </div>
                            <div className="input_wrapper">
                                <textarea placeholder="Write a Message..."></textarea>
                            </div>

                            <div className="btn_wrapper">
                                <button type="submit" className="btn">Submit</button>
                            </div>
                            </form>
                    </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Contact;
