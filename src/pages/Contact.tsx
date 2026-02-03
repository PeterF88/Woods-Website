import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const revealRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el: HTMLElement | null) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would send to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="contact-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551773188-0801da12ddae?w=1920&h=800&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Contact Us</h1>
                    <p className="hero-subtitle">We're Here to Help You Play</p>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="section" ref={addToRefs}>
                <div className="container">
                    <div className="contact-grid reveal" ref={addToRefs}>
                        {/* Contact Information */}
                        <div className="contact-info">
                            <h2>Get In Touch</h2>

                            <div className="info-item">
                                <MapPin className="info-icon" />
                                <div>
                                    <h3>Location</h3>
                                    <a
                                        href="https://maps.google.com/?q=401+S+33rd+St,+Lincoln,+NE+68510"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        401 S 33rd St<br />
                                        Lincoln, NE 68510
                                    </a>
                                </div>
                            </div>

                            <div className="info-item">
                                <Phone className="info-icon" />
                                <div>
                                    <h3>Phone</h3>
                                    <a href="tel:402-441-7095">(402) 441-7095</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <Mail className="info-icon" />
                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:woodsleagues@gmail.com">woodsleagues@gmail.com</a>
                                </div>
                            </div>

                            <div className="newsletter-link">
                                <a
                                    href="https://us2.list-manage.com/subscribe?u=3203d532b2136fc1bc7e3a3e4&id=9c2d935aef"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Join Our Mailing List
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Send a Message</h2>
                            {submitted ? (
                                <div className="form-success">
                                    <h3>Thank you!</h3>
                                    <p>We've received your message and will get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-input"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-textarea"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Hours Section */}
            <section className="section section-gray" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <Clock className="section-icon" />
                        <h2>Hours of Operation</h2>
                        <p className="section-note">*We reserve the right to close early based on pre-reserved court times each day, so please call ahead.</p>
                    </div>

                    <div className="hours-grid reveal" ref={addToRefs}>
                        <div className="hours-card">
                            <h3>January 1 - April 30</h3>
                            <ul>
                                <li>Sundays - Fridays: 8 am - 10 pm*</li>
                                <li>Saturdays: 7:30 am - 10 pm*</li>
                            </ul>
                        </div>

                        <div className="hours-card">
                            <h3>May 1 - May 17</h3>
                            <ul>
                                <li>Mondays - Thursdays: 8 am - 10 pm*</li>
                                <li>Fridays: 8 am - 9 pm*</li>
                                <li>Saturdays: 7:30 am - 7 pm*</li>
                                <li>Sundays: 8 am - 7 pm (open till 10 on 5/11)*</li>
                            </ul>
                        </div>

                        <div className="hours-card">
                            <h3>May 18 - August 16</h3>
                            <ul>
                                <li>Mondays - Thursdays: 8 am - 10 pm*</li>
                                <li>Fridays: 8 am - 9 pm*</li>
                                <li>Saturdays & Sundays: 8 am - 7 pm*</li>
                            </ul>
                        </div>

                        <div className="hours-card">
                            <h3>August 17 - October 31</h3>
                            <ul>
                                <li>Mondays - Thursdays: 8 am - 10 pm*</li>
                                <li>Fridays & Sundays: 8 am - 9 pm*</li>
                                <li>Saturdays: 7:30 am - 7 pm*</li>
                            </ul>
                        </div>

                        <div className="hours-card">
                            <h3>November 1 - December 31</h3>
                            <ul>
                                <li>Sundays - Fridays: 8 am - 10 pm*</li>
                                <li>Saturdays: 7:30 am - 10 pm*</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section" ref={addToRefs}>
                <iframe
                    title="Woods Tennis Center Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.5!2d-96.6734!3d40.8147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8796be59c9e7e16d%3A0x8c07e3d9b8a0d8a0!2s401%20S%2033rd%20St%2C%20Lincoln%2C%20NE%2068510!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </main>
    );
};

export default Contact;
