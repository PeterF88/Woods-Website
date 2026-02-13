import './JoinOurTeam.css';

const JoinOurTeam = () => {
    return (
        <main className="join-team-page">
            <section className="join-team-hero">
                {/* Left: Text Content */}
                <div className="join-team-text">
                    <h1 className="join-team-title">Come Work With Us</h1>
                    <h2 className="join-team-subtitle">Outreach and Facilities</h2>
                    <p className="join-team-description">
                        Interested in working with us to further our mission in the community or in joining our Front Desk, Coaching, or Cleaning teams? Fill out this form and we'll be in touch!
                    </p>
                    <div>
                        <a
                            href="https://forms.gle/6vWMHhMxQc2vWqUe9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="join-team-apply-btn"
                        >
                            Apply Here
                        </a>
                    </div>
                </div>

                {/* Right: Hero Image */}
                <div className="join-team-image">
                    <img
                        src="/join-team-hero.png"
                        alt="Young tennis player on an outdoor court"
                    />
                </div>
            </section>
        </main>
    );
};

export default JoinOurTeam;
