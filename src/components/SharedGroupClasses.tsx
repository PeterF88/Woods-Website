import { Link } from 'react-router-dom';

interface SharedGroupClassesProps {
    sectionRef: (el: HTMLElement | null) => void;
}

const SharedGroupClasses = ({ sectionRef }: SharedGroupClassesProps) => {
    return (
        <section
            id="group-classes"
            className="register-section"
            ref={sectionRef}
        >
            <div className="container">
                <h2>Group Class Registrations</h2>

                {/* Weather Info */}
                <div className="weather-info-box">
                    <h3>Weather Updates</h3>
                    <p>
                        Go to our <a href="https://www.facebook.com/woodstenniscenter" target="_blank" rel="noopener noreferrer">Facebook Page</a> (no need to have a Facebook account!) — If there's no weather announcement, everything is on as scheduled! We will always post something there if we're canceling classes and remember, we don't necessarily make the same announcements as the public schools. Keep an eye out there for updated information.
                    </p>
                </div>

                {/* Session Cards */}
                <div className="session-cards">
                    {/* Current Session */}
                    <div className="session-card">
                        <span className="card-label">Current Session</span>
                        <h3>Winter Session 3</h3>
                        <p className="session-dates">Jan 5 – Feb 21</p>
                        <p className="session-note">
                            No Classes: *Feb 14-15<br />
                            *Adult classes on Feb 16 will be held Feb 23 instead
                        </p>
                        <a
                            href="https://www.woodstenniscenter.com/_files/ugd/e379dc_9417241f4aa74b5f92dc2cbd5e76f8ad.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brochure-link"
                        >
                            📄 Winter Session 3 2026 Brochure
                        </a>

                        <h4 className="timeline-heading">Timeline:</h4>
                        <ul className="timeline">
                            <li>
                                <strong>Dec 15:</strong>
                                Same-Schedule Registration opens for those in Fall Session 2. Watch for an email that will be sent around 8 am (if you don't see the email in your Inbox, check to see if it went into Spam).
                            </li>
                            <li>
                                <strong>Dec 22:</strong>
                                Pre-Registration opens for those in Fall Session 2. You'll use the same link that was in the Dec 15 email.
                            </li>
                            <li>
                                <strong>Dec 29:</strong>
                                Registration opens to the public at 8 am. Click the link below.
                            </li>
                            <li>
                                <strong>Jan 5:</strong>
                                Start of Session 3 and Late pricing begins.
                            </li>
                        </ul>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScU114RMISrlshTfhL3exT2YXHm3ALVZTSvpEGXw85qVOrUkg/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="register-btn full-width"
                        >
                            Click here to register
                        </a>
                    </div>

                    {/* Next Session */}
                    <div className="session-card">
                        <span className="card-label">Next Session</span>
                        <h3>Winter Session 4</h3>
                        <p className="session-dates">March 2 – April 11</p>

                        <h4 className="timeline-heading">Timeline:</h4>
                        <ul className="timeline">
                            <li>
                                <strong>Feb 9:</strong>
                                Same-Schedule Registration opens for those in Winter Session 3. Watch for an email that will be sent around 8 am (if you don't see the email in your Inbox, check to see if it went into Spam).
                            </li>
                            <li>
                                <strong>Feb 16:</strong>
                                Pre-Registration opens for those in Winter Session 3. You'll use the same link that was in the Same-Schedule email.
                            </li>
                            <li>
                                <strong>Feb 23:</strong>
                                Registration opens to the public at 8 am. Click the link below.
                            </li>
                            <li>
                                <strong>Mar 2:</strong>
                                Start of Session 4 and Late pricing begins.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Summer 2026 */}
                <div className="session-card session-card-standalone">
                    <span className="card-label">Coming Soon</span>
                    <h3>Summer 2026</h3>
                    <p className="session-dates">
                        Session 1: June 1 – July 2<br />
                        Session 2: July 6 – August 7
                    </p>
                    <h4 className="timeline-heading">Timeline:</h4>
                    <ul className="timeline">
                        <li>
                            <strong>Around April 20:</strong>
                            Brochure will post here with schedule and pricing
                        </li>
                        <li>
                            <strong>April 27:</strong>
                            Early Registration will begin. Click the link that will appear below.
                        </li>
                    </ul>
                </div>

                {/* Junior Tennis Info Link */}
                <div className="info-link-row">
                    <span>Want more details on our Junior Tennis program?</span>
                    <Link to="/junior-classes">Go to Junior Class Descriptions →</Link>
                </div>

                {/* New to Woods */}
                <div className="new-player-box">
                    <h3>New to Woods Tennis Center?</h3>
                    <p className="new-player-subtitle">Here's the class to sign up for:</p>
                    <ul className="ages-list">
                        <li>Ages 4-6 → Little Aces</li>
                        <li>Ages 7-10 → Red</li>
                        <li>Ages 11-12 → Intro Orange</li>
                        <li>Age 13-18 → Teen Green</li>
                        <li>Age 18+ → Adult Classes</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SharedGroupClasses;
