
import './Policies.css';

const Policies = () => {
    return (
        <main className="policies-page">
            <section className="hero hero-small">
                <div className="hero-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549643444-facfc83e7bdd?w=1920&h=600&fit=crop)' }} />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1>Policies & Weather</h1>
                    <p>Important information regarding facility rules and weather cancellations.</p>
                </div>
            </section>
            <section className="container section">
                <h2>Weather Policy</h2>
                <p>Please check our rainout line or social media for the latest updates on court conditions and class cancellations.</p>
                <h2>Facility Policies</h2>
                <p>Coming soon...</p>
            </section>
        </main>
    );
};

export default Policies;
