
export const Pricing = () => {
    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="hero" style={{ height: '50vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1622163642998-1eaec05e8486?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80")' }}>
                <div className="hero-content">
                    <h1 className="hero-title">RATES & PRICING</h1>
                    <p className="hero-subtitle">ACCESSIBLE TENNIS FOR EVERYONE</p>
                </div>
            </section>

            {/* Content Section */}
            <div style={{ backgroundColor: 'white', color: '#121212', padding: '8rem 0' }}>
                <div className="container">
                    <p style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '6rem', color: '#444' }}>
                        Woods Tennis Center is a public facility. You do not need a membership to play, but pass holders enjoy discounted rates and free outdoor play.
                    </p>

                    <div style={{ overflowX: 'auto', marginBottom: '6rem' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #121212' }}>
                                    <th style={{ padding: '2rem 1rem', fontSize: '1.2rem' }}>Service</th>
                                    <th style={{ padding: '2rem 1rem', fontSize: '1.2rem', color: '#888' }}>Public</th>
                                    <th style={{ padding: '2rem 1rem', fontSize: '1.2rem', color: 'var(--color-primary)' }}>Pass Holder</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '2rem 1rem', fontWeight: '700' }}>Indoor Courts</td>
                                    <td style={{ padding: '2rem 1rem' }}>$32 / hr</td>
                                    <td style={{ padding: '2rem 1rem', fontWeight: '700' }}>$24 / hr</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '2rem 1rem', fontWeight: '700' }}>Outdoor Courts</td>
                                    <td style={{ padding: '2rem 1rem' }}>$14 / hr</td>
                                    <td style={{ padding: '2rem 1rem', fontWeight: '700', color: '#27ae60' }}>FREE</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '2rem 1rem', fontWeight: '700' }}>Private Lessons</td>
                                    <td style={{ padding: '2rem 1rem' }}>$58 / hr</td>
                                    <td style={{ padding: '2rem 1rem', fontWeight: '700' }}>$48 / hr</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>WHY BECOME A PASS HOLDER?</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', fontSize: '1.1rem' }}>✓ Free outdoor court reservations</li>
                                <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', fontSize: '1.1rem' }}>✓ 25% discount on indoor court rates</li>
                                <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', fontSize: '1.1rem' }}>✓ Discounted private lessons</li>
                                <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', fontSize: '1.1rem' }}>✓ Early registration for classes</li>
                            </ul>
                        </div>
                        <div style={{ backgroundColor: '#f9f9f9', padding: '4rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '1.5rem', color: '#121212' }}>READY TO JOIN?</h3>
                            <p style={{ color: '#666', marginBottom: '2rem' }}>Visit us at the front desk or call (402) 441-7095 to learn about our annual and seasonal pass options.</p>
                            <button className="btn" style={{ borderColor: '#121212', color: '#121212' }}>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
