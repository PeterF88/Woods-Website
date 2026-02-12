import './Adaptive.css';

const Adaptive = () => {
    return (
        <main className="adaptive-page">
            {/* Gray Banner */}
            <section className="adaptive-banner">
                <h1 className="adaptive-banner-title">Adaptive &amp; Wheelchair</h1>
            </section>

            {/* Adaptive Tennis Section */}
            <section className="adaptive-section">
                <h2 className="adaptive-section-heading">Adaptive Tennis</h2>

                <div className="adaptive-cards-row">
                    <div className="adaptive-card adaptive-card-white">
                        <h3 className="adaptive-card-title">Adaptive Red Ball</h3>
                        <p className="adaptive-card-text">
                            This is an adaptive group for younger players ages ~5-10, just beginning to pick up the game. Red balls are used.
                        </p>
                    </div>

                    <div className="adaptive-card adaptive-card-gray">
                        <h3 className="adaptive-card-title">Tennis Without Limits</h3>
                        <p className="adaptive-card-text">
                            This is an adaptive group for younger youth (ages ~6-15). Orange and green balls are used.
                        </p>
                    </div>

                    <div className="adaptive-card adaptive-card-gray">
                        <h3 className="adaptive-card-title">Tennis Buddies</h3>
                        <p className="adaptive-card-text">
                            This adaptive group is open to players ages 16+ interested in learning the game of tennis. Green and yellow balls are used.
                        </p>
                    </div>

                    <div className="adaptive-card adaptive-card-yellow">
                        <h3 className="adaptive-card-title">Competitive Adult</h3>
                        <p className="adaptive-card-text">
                            This is an invited adaptive group for our more experienced and nationally ranked players who have several years of competitive play to continue refining their game.
                        </p>
                    </div>
                </div>

                <p className="adaptive-contact-text">
                    For more information on specific programming and times, please reach out to{' '}
                    <a href="mailto:kaitlin.roselius@gmail.com?subject=Adaptive%20Tennis%20Information">
                        Kaitlin
                    </a>{' '}
                    (kaitlin.roselius@gmail.com).
                </p>
            </section>

            {/* Wheelchair Tennis Section */}
            <section className="adaptive-section wheelchair-section-block">
                <h2 className="adaptive-section-heading">Wheelchair Tennis</h2>
                <div className="wheelchair-text-block">
                    <p>
                        Woods Tennis Center offers ongoing wheelchair programming for junior and adult players
                        depending on the time of year, in partnership with Madonna Rehabilitation Hospital.
                    </p>
                    <p>
                        For more information on specific programming and times, please reach out to{' '}
                        <a href="mailto:wtcheim@gmail.com?subject=Wheelchair%20Tennis%20Information">Kevin</a>{' '}
                        (wtcheim@gmail.com).
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Adaptive;
