
import './Calendar.css';

const Calendar = () => {
    return (
        <main className="calendar-page">
            <section className="hero hero-small">
                <div className="hero-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1920&h=600&fit=crop)' }} />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1>Calendar</h1>
                    <p>Upcoming Events and Tournaments</p>
                </div>
            </section>
            <section className="container section">
                {/* Placeholder for calendar embed or list */}
                <p>Loading calendar...</p>
            </section>
        </main>
    );
};

export default Calendar;
