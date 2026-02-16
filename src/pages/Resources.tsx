import React from 'react';
import './Resources.css';


interface ResourcesProps {
    hideHero?: boolean;
}

const Resources: React.FC<ResourcesProps> = ({ hideHero }) => {
    return (
        <div className="resources-page">
            {!hideHero && (
                <section className="resources-hero">
                    <div className="resources-hero-content">
                        <h1>Resources</h1>
                    </div>
                </section>
            )}

            <div className="resources-container">
                {/* New Resources Section from Screenshot */}
                <section className="resources-section">
                    <h2>RESOURCES</h2>
                    <p className="resources-intro">
                        Navigating junior tennis can be hard. These resources will help parents and players.
                    </p>
                    <ul className="resources-list">
                        <li>
                            <a href="https://www.woodstenniscenter.com/about-7" target="_blank" rel="noopener noreferrer">Navigating the USTA</a>
                            <ul>
                                <li>
                                    <a href="https://playtennis.usta.com/tournaments" target="_blank" rel="noopener noreferrer">USTA calendar for all tournaments in Nebraska</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1nFDusaoz-q7LWXOxSP2neWoOnRYfdkVyDQeX2WpPhc4/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Parent Resources</a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1onTfrVLupaK0Ym9hbvGWQm8r9OWple9qy8PgBX5KK1c/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Player Resources</a>
                        </li>
                        <li>
                            <a href="https://playtennis.usta.com/woodstenniscenter/Tournaments" target="_blank" rel="noopener noreferrer">Woods Tennis Center USTA Tournaments</a>
                        </li>
                    </ul>

                    <div className="opportunities-section">
                        <p>
                            Just a reminder to all players and parents: We want players practicing outside of regular practice times, to
                            help this happen, we have some <strong>free & reduced-price court opportunities</strong>. If you are in:
                        </p>
                        <ul className="opportunities-list">
                            <li>
                                <strong>Junior Groups:</strong> Free Day-Of: Call or check the day you want to play and you can play <em>outdoors</em> for free as
                                long as there is court availability.*
                            </li>
                            <li>
                                <strong>Private Lessons:</strong> <a href="https://4fdd9a7c-8e59-4237-a152-e6e2f7354254.filesusr.com/ugd/e379dc_c2bd5cf1285c48bba88579911f6f1eb0.pdf" target="_blank" rel="noopener noreferrer" className="highlight-link">$5 Day-Of</a>: Call the day you want to play and you can play <em>indoors</em> or <em>outdoors</em> for $5 as
                                long as there is court availability, limit one hour per lesson taken, and must be used within a week of the
                                lesson.*
                            </li>
                        </ul>
                        <p className="disclaimer">
                            *If you're playing with someone not eligible for Free or $5 Day-Of,
                            they'll pay their half of the court at regular price.
                        </p>
                    </div>
                </section>

                {/* End of Resources Content */}
            </div>
        </div>
    );
};

export default Resources;
