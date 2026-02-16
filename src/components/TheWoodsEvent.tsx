import './TheWoodsEvent.css';

const TheWoodsEvent = () => {
    return (
        <div className="woods-event-container">
            {/* Main Hero Graphic */}
            <div className="woods-event-hero-wrapper">
                <img
                    src="/woods-event-promo.png"
                    alt="The Woods Event: Tennis Across the Ages"
                    className="woods-event-hero-img"
                />
            </div>

            {/* Headline Section */}
            <section className="woods-event-section dark-bg">
                <h2 className="woods-event-headline">
                    Please join us for our Second Annual Woods Event: Tennis Across the Ages!
                </h2>
            </section>

            {/* Why Your Help Is Needed */}
            <section className="woods-event-section white-bg">
                <div className="woods-event-inner">
                    <h3 className="woods-event-subheadline">Why Your Help Is Needed</h3>
                    <p className="woods-event-text">
                        Woods Tennis Center serves more than 12,000 area players from a diverse range of ability and socioeconomic backgrounds. We provide a wide range of programming for adults, youth, adaptive, and wheelchair players, as well as racquets, equipment, and much-needed scholarships. Your financial support makes this possible. Help us "Take the Game to The Community" by participating in our Second Woods Event: Tennis Across the Ages.
                    </p>
                </div>
            </section>

            {/* Tennis Across the Ages Details */}
            <section className="woods-event-section light-gray-bg">
                <div className="woods-event-inner">
                    <h3 className="woods-event-subheadline serif-font large">Tennis Across the Ages</h3>
                    <p className="woods-event-location serif-font">Museum of American Speed</p>
                    <p className="woods-event-date serif-font">Saturday, February 28th 2026</p>

                    <div className="woods-event-schedule serif-font">
                        <p>5:00 Museum Doors Open</p>
                        <p>5:30 Cocktail hour</p>
                        <p>6:15 Celebrations begin!</p>
                        <p className="italic">*Includes live auction, dinner by Yes Chef Catering, and special program.*</p>
                    </div>

                    <div className="woods-event-mission">
                        <p>
                            All proceeds benefit Woods Tennis and Educational Foundation supporting youth and adult development through tennis, education, scholarship opportunities, and facility improvements.
                        </p>
                    </div>

                    <p className="woods-event-pricing">Tickets start at $75.00</p>
                </div>
            </section>

            {/* CTA Buttons Section */}
            <section className="woods-event-section white-bg">
                <div className="woods-event-inner flex-column">
                    <a
                        href="https://events.handbid.com/auctions/the-woods-event"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="woods-event-cta-btn dark"
                    >
                        Ticket & Donation Information
                    </a>

                    <a
                        href="https://www.woodstenniscenter.com/_files/ugd/010578_483e909d3bf64786b1809d397195cd64.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="woods-event-cta-btn dark"
                    >
                        Live Auction Items
                    </a>
                </div>
            </section>

            {/* Footer / Contact Info */}
            <footer className="woods-event-footer container">
                <div className="woods-event-footer-content">
                    <h4 className="serif-font">Woods Tennis Center</h4>
                    <p><a href="mailto:woodsleagues@gmail.com">woodsleagues@gmail.com</a></p>
                    <p>(402) 441-7095</p>
                    <p>401 S 33rd St, Lincoln, NE 68510, USA</p>

                    <div className="woods-event-mailing-list-wrapper">
                        <a
                            href="https://us2.list-manage.com/subscribe?u=3203d532b2136fc1bc7e3a3e4&id=9c2d935aef"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="woods-event-mailing-btn"
                        >
                            Join our Mailing List
                        </a>
                    </div>

                    <div className="social-links-simple">
                        <span className="social-icon">📍</span>
                        <span className="social-icon">f</span>
                        <span className="social-icon">📷</span>
                    </div>
                </div>
                <div className="woods-event-copyright">
                    <p>©2026 by Woods Tennis Center</p>
                </div>
            </footer>
        </div>
    );
};

export default TheWoodsEvent;
