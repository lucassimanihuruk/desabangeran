import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Your message has been sent!");
    };

    return (
        <section className="contact-us">
            <div className="header-text">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>
                            <strong>Location:</strong> Balai Desa Bangeran, Garung,
                            Dawarblandong, Kec. Dawar Blandong, Kabupaten Mojokerto, Jawa Timur
                            61354
                        </p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-clock"></i>
                        <p>
                            <strong>Open Hours:</strong> Sunday-Friday: 09:00 AM - 12:00 AM
                        </p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <p>
                            <strong>Email:</strong> bumdesbangeran@gmail.com
                        </p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone-alt"></i>
                        <p>
                            <strong>Call:</strong> +6281515549769
                        </p>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Send Us a Message</h2>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="text" name="subject" placeholder="Subject" required />
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
