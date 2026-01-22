import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-grid">
                    {/* Column 1: Brand */}
                    <div className="footer-column brand">
                        <h2 className="footer-logo">WOODS</h2>
                        <p className="footer-tagline">Finding serenity in the heart of nature.</p>
                        <div className="social-links">
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Contact Info */}
                    <div className="footer-column">
                        <h3>Visit Us</h3>
                        <div className="contact-item">
                            <MapPin size={18} />
                            <span>401 Deep Woods Trail, Sanctuary, NW 98001</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} />
                            <span>(555) 123-TREE</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} />
                            <a href="mailto:hello@woodssanctuary.com">hello@woodssanctuary.com</a>
                        </div>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div className="footer-column">
                        <h3>Stay Connected</h3>
                        <p>Join our community and receive updates from the forest.</p>
                        <form className="footer-newsletter">
                            <input type="email" placeholder="Email Address" />
                            <button type="submit">Join</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 WOODS Sanctuary. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
