import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="widget">
                            <h3>Contact</h3>
                            <address>
                                Balai Desa Bangeran, Garung, Dawarblandong, Kec. Dawar Blandong, Kabupaten Mojokerto, Jawa Timur 61354
                            </address>
                            <ul className="list-unstyled social">
                                <li><a href="https://wa.me/6281515549769" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a></li>
                                <li><a href="mailto:bumdesbangeran@gmail.com"><i className="bi bi-envelope"></i></a></li>
                                <li><a href="https://instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>
                                <li><a href="https://twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a></li>
                                <li><a href="https://facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h3>Location</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.7231609766504!2d112.44047877848686!3d-7.357796136354615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78055a2032b143%3A0x2c7f1fe922872a0!2sBalai%20Desa%20Bangeran%20Kecamatan%20Dawarblandong!5e0!3m2!1sen!2sid!4v1729958314923!5m2!1sen!2sid"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h3>Links</h3>
                            <ul className="list-unstyled links">
                                <li><a href="">Our Vision</a></li>
                                <li><a href="/about.html">About us</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="copyright">
                    <p>
                        Copyright &copy; 
                        {new Date().getFullYear()} All Rights Reserved. &mdash; Designed by 
                        <a href="https://www.instagram.com/kkn.um.bangeran/" target="_blank" rel="noopener noreferrer"> Tim KKN UM Desa Bangeran Tahun 2024</a>
                    </p>
                    <div className="distributed">
                        Distributed by
                        <a href="https://www.instagram.com/kkn.um.bangeran/" target="_blank" rel="noopener noreferrer"> Tim KKN UM Desa Bangeran Tahun 2024</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;