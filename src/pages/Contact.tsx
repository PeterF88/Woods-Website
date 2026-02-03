import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="hero" style={{ height: '50vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80")' }}>
                <div className="hero-content">
                    <h1 className="hero-title">CONTACT US</h1>
                    <p className="hero-subtitle">WE'RE HERE TO HELP YOU PLAY</p>
                </div>
            </section>

            {/* Content Section */}
            <div style={{ backgroundColor: 'white', color: '#121212', padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>GET IN TOUCH</h2>
                            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
                                <MapPin style={{ color: 'var(--color-primary)' }} size={32} />
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>LOCATION</h3>
                                    <p style={{ color: '#666' }}>401 S 33rd St, Lincoln, NE 68510</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
                                <Phone style={{ color: 'var(--color-primary)' }} size={32} />
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>PHONE</h3>
                                    <p style={{ color: '#666' }}>(402) 441-7095</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
                                <Mail style={{ color: 'var(--color-primary)' }} size={32} />
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>EMAIL</h3>
                                    <p style={{ color: '#666' }}>woodsleagues@gmail.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <Clock style={{ color: 'var(--color-primary)' }} size={32} />
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>HOURS</h3>
                                    <p style={{ color: '#666' }}>Open Daily: 8:00 AM – 10:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#f9f9f9', padding: '4rem', borderRadius: 'var(--radius-md)', borderTop: '5px solid var(--color-primary)' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>SEND A MESSAGE</h2>
                            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gap: '2rem' }}>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }}
                                />
                                <textarea
                                    placeholder="Your Message"
                                    style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', width: '100%', height: '150px' }}
                                ></textarea>
                                <button className="btn" style={{ background: '#121212', color: 'white', borderColor: '#121212' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
