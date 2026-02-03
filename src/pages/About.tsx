
export const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="hero" style={{ height: '50vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80")' }}>
                <div className="hero-content">
                    <h1 className="hero-title">OUR STORY</h1>
                    <p className="hero-subtitle">TAKING THE GAME TO THE COMMUNITY</p>
                </div>
            </section>

            {/* Content Section */}
            <div style={{ backgroundColor: 'white', color: '#121212', padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center', marginBottom: '10rem' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>A TRADITION OF EXCELLENCE</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444' }}>
                                Founded with a mission to take the game to the community, Woods Tennis Center has grown from a local park facility into Lincoln's premier public tennis destination.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                                Since 2008, we have expanded our reach from 26 players to over 12,000 annually. Our focus remains on holistic player development—developing not just tennis skills, but character, leadership, and mental wellness.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                                As a 501(c)3 non-profit organization through the Woods Tennis Education Foundation, we prioritize accessibility, ensuring that everyone in our community has the opportunity to experience the joy of the game.
                            </p>
                        </div>
                        <div style={{
                            width: '100%',
                            aspectRatio: '4/5',
                            background: 'url("https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: 'var(--radius-md)',
                            borderTop: '5px solid var(--color-primary)'
                        }}></div>
                    </div>

                    <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '6rem' }}>OUR LEADERSHIP</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: '#eee', margin: '0 auto 2rem', border: '2px solid var(--color-primary)' }}></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Kevin Heim</h3>
                            <p style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1rem' }}>EXECUTIVE DIRECTOR</p>
                            <p style={{ color: '#666' }}>Leading the mission to grow tennis in Lincoln for over 15 years.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: '#eee', margin: '0 auto 2rem', border: '2px solid var(--color-primary)' }}></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Talor Wain</h3>
                            <p style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1rem' }}>HEAD PROFESSIONAL</p>
                            <p style={{ color: '#666' }}>Dedicated to technical excellence and high-performance training.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: '#eee', margin: '0 auto 2rem', border: '2px solid var(--color-primary)' }}></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>WTEF Board</h3>
                            <p style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1rem' }}>COMMUNITY FOUNDATION</p>
                            <p style={{ color: '#666' }}>Volunteers committed to breaking down barriers for youth tennis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
