import './Home.css';

export const Programs = () => {
    const juniorClasses = [
        { name: 'Little Aces', age: '4-6', desc: 'Focus on hand-eye coordination and basic strokes.' },
        { name: 'Red Ball', age: '7-10', desc: 'Developing rally skills on a smaller court.' },
        { name: 'Intro Orange', age: '11-12', desc: 'Technical foundation and point play.' },
        { name: 'Teen Green', age: '13-18', desc: 'Focus on strategy and competitive play.' },
    ];

    const adultClasses = [
        { name: 'Beginner', level: '1.0-2.0', desc: 'Starting from the basics. No experience needed.' },
        { name: 'Ready to Rally', level: '2.5', desc: 'Focus on maintaining a rally and basic tactics.' },
        { name: 'Drill & Play', level: '3.0+', desc: 'High-intensity drills and situational match play.' },
    ];

    return (
        <div className="programs-page">
            {/* Hero Section */}
            <section className="hero" style={{ height: '50vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80")' }}>
                <div className="hero-content">
                    <h1 className="hero-title">OUR PROGRAMS</h1>
                    <p className="hero-subtitle">WORLD-CLASS TRAINING FOR ALL AGES</p>
                </div>
            </section>

            {/* Content Section */}
            <div style={{ backgroundColor: 'white', color: '#121212', padding: '8rem 0' }}>
                <div className="container">
                    <p style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '4rem', color: '#444' }}>
                        Whether you're picking up a racquet for the first time or looking to sharpen your competitive edge, Woods Tennis Center has a program for you.
                    </p>

                    <h2 style={{ color: '#121212', fontSize: '3rem', marginBottom: '2rem', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem' }}>JUNIOR TENNIS</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '6rem' }}>
                        {juniorClasses.map((cls) => (
                            <div key={cls.name} style={{ borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
                                <span style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.9rem' }}>AGES {cls.age}</span>
                                <h3 style={{ color: '#121212', margin: '1rem 0', fontSize: '1.5rem' }}>{cls.name}</h3>
                                <p style={{ color: '#666', fontSize: '1.1rem', margin: '0' }}>{cls.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h2 style={{ color: '#121212', fontSize: '3rem', marginBottom: '2rem', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem' }}>ADULT TENNIS</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                        {adultClasses.map((cls) => (
                            <div key={cls.name} style={{ borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
                                <span style={{ color: '#888', fontWeight: '700', fontSize: '0.9rem' }}>NTRP {cls.level}</span>
                                <h3 style={{ color: '#121212', margin: '1rem 0', fontSize: '1.5rem' }}>{cls.name}</h3>
                                <p style={{ color: '#666', fontSize: '1.1rem', margin: '0' }}>{cls.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
