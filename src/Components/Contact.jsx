import React from 'react';

function Contact() {

  return (
   <section id="contact" className="section7">
    <h2>Let's Connect!</h2>
    <p>I'm always open to new opportunities and collaborations. Feel free to reach out, and let's build something great together!</p>

    <div className="contact-info">
        <div className="Contact">
            <img className="contact-img" src="/email.png" alt="Email" />
            <a href="mailto:arunlokesh78@gmail.com">arunlokesh78@gmail.com</a>
        </div>
        
        <div className="Contact">
            <img className="contact-img" src="/linkedin.png" alt="Linkedin" />
            <a href="https://www.linkedin.com/in/arun-kumar-r-920841235" target="_blank">
                linkedin.com/in/arun-kumar-r
            </a>
        </div>
        
        <div className="Contact">
            <img className="contact-img" src="/github.png" alt="GitHub" />
            <a href="https://github.com/ArunKumarWebDeveloper" target="_blank">
                github.com/ArunKumarWebDeveloper
            </a>
        </div>
    </div>
</section>
  );
}

export default Contact;