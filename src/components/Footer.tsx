import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Newsletter Section */}
            <div className="footer-newsletter">
                <div className="container">
                    <div className="newsletter-content">
                        <h3 className="newsletter-title">Stay Connected</h3>
                        <p className="newsletter-text">Join our mailing list for updates, events, and tennis tips.</p>
                        <a
                            href="https://us2.list-manage.com/subscribe?u=3203d532b2136fc1bc7e3a3e4&id=9c2d935aef"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-light"
                        >
                            Join Our Mailing List
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand & Contact */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">WOODS TENNIS</Link>
                            <p className="footer-tagline">Taking the Game to the Community Since 2008</p>
                            <div className="footer-contact">
                                <a href="https://maps.google.com/?q=401+S+33rd+St,+Lincoln,+NE+68510" target="_blank" rel="noopener noreferrer" className="contact-item">
                                    <MapPin size={16} />
                                    <span>401 S 33rd St, Lincoln, NE 68510</span>
                                </a>
                                <a href="tel:402-441-7095" className="contact-item">
                                    <Phone size={16} />
                                    <span>(402) 441-7095</span>
                                </a>
                                <a href="mailto:woodsleagues@gmail.com" className="contact-item">
                                    <Mail size={16} />
                                    <span>woodsleagues@gmail.com</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-links">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul>
                                <li><Link to="/programs">Programs</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/foundation">Foundation</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Programs */}
                        <div className="footer-links">
                            <h4 className="footer-heading">Programs</h4>
                            <ul>
                                <li><Link to="/programs#junior">Junior Tennis</Link></li>
                                <li><Link to="/programs#adult">Adult Tennis</Link></li>
                                <li><a href="https://courtreserve.com/Online/Reservations/Index/4714" target="_blank" rel="noopener noreferrer">Book a Court</a></li>
                                <li><Link to="/pricing#passes">Seasonal Passes</Link></li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div className="footer-social-section">
                            <h4 className="footer-heading">Follow Us</h4>
                            <div className="footer-social">
                                <a href="https://facebook.com/woodstenniscenter" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://instagram.com/woodstenniscenter" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://twitter.com/woodstennisctr" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} Woods Tennis Center. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
