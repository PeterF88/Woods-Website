
export const Foundation = () => {
    return (
        <div className="foundation-page">
            {/* Hero Section */}
            <section className="hero" style={{ height: '50vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80")' }}>
                <div className="hero-content">
                    <h1 className="hero-title">WOODS EDUCATION FOUNDATION</h1>
                    <p className="hero-subtitle">TRANSFORMING LIVES THROUGH TENNIS</p>
                </div>
            </section>

            {/* Content Section */}
            <div style={{ backgroundColor: 'white', color: '#121212', padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>OUR MISSION</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: '#444' }}>
                            Building community and transforming lives through tennis and education. As a 501(c)3 non-profit, we ensure that every child has a path to the court.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
                        <div style={{ padding: '4rem 2rem', borderBottom: '1px solid #eee', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🏆</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>SCHOLARSHIPS</h3>
                            <p style={{ color: '#666' }}>We provide full and partial scholarships so that financial status never prevents a child from learning tennis.</p>
                        </div>
                        <div style={{ padding: '4rem 2rem', borderBottom: '1px solid #eee', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🎾</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>FREE RACQUETS</h3>
                            <p style={{ color: '#666' }}>Every "Little Ace" and first-time junior player receives a brand new racquet to take home and keep.</p>
                        </div>
                        <div style={{ padding: '4rem 2rem', borderBottom: '1px solid #eee', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🤝</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>ADAPTIVE PLAY</h3>
                            <p style={{ color: '#666' }}>Specialized programs for wheelchair tennis, Special Olympics, and players with diverse abilities.</p>
                        </div>
                    </div>

                    <div style={{
                        padding: '8rem 4rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1595435064219-c80ce544b606?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        textAlign: 'center',
                        borderTop: '5px solid var(--color-primary)'
                    }}>
                        <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '2.5rem' }}>MAKE AN IMPACT</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>
                            Your donations directly fund our outreach programs and facility improvements. Help us continue to serve the Lincoln community.
                        </p>
                        <button className="btn btn-primary" style={{ background: 'white', color: '#121212' }}>Donate to WTEF</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
