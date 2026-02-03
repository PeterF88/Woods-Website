import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
    const revealRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el: HTMLElement | null) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <main className="pricing-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=1920&h=800&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Rates & Pricing</h1>
                    <p className="hero-subtitle">Accessible Tennis for Everyone</p>
                </div>
            </section>

            {/* Court Pricing Section */}
            <section className="section" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>Court Pricing</h2>
                        <p className="section-subtitle">
                            You don't need a membership to play at Woods Tennis Center. Walk-in rates are available for everyone.
                        </p>
                    </div>

                    <div className="pricing-table-wrapper reveal" ref={addToRefs}>
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Public Use</th>
                                    <th>Pass Holder</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>60 Minute Indoor Court</td>
                                    <td>$32/court</td>
                                    <td>$24/court</td>
                                </tr>
                                <tr>
                                    <td>60 Minute Outdoor Court</td>
                                    <td>$14/court (1/2 price Fri-Sun)</td>
                                    <td>FREE</td>
                                </tr>
                                <tr>
                                    <td>60 Minute Ball Machine</td>
                                    <td>$32</td>
                                    <td>$24</td>
                                </tr>
                                <tr>
                                    <td>60 Minute Private Lesson</td>
                                    <td>$58</td>
                                    <td>$48</td>
                                </tr>
                                <tr>
                                    <td>60 Minute Semi-Private Lesson (2)</td>
                                    <td>$34/person</td>
                                    <td>$25/person</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="info-note reveal" ref={addToRefs}>
                        <p>
                            Players in Private & Semi-Private lessons can get{' '}
                            <a
                                href="https://www.woodstenniscenter.com/_files/ugd/e379dc_c2bd5cf1285c48bba88579911f6f1eb0.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                $5-Day-Of
                            </a>{' '}
                            court time and ball machine use.
                        </p>
                    </div>
                </div>
            </section>

            {/* Annual Pass Pricing */}
            <section id="passes" className="section section-gray" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>Annual Pass Pricing</h2>
                        <p className="section-subtitle">Save more with an annual pass - includes 12th month free!</p>
                    </div>

                    <div className="pass-cards reveal" ref={addToRefs}>
                        <div className="pass-card">
                            <h3>Adult</h3>
                            <div className="price">$460<span>/year + tax</span></div>
                            <p className="monthly">or $44.50/month for 11 months</p>
                        </div>

                        <div className="pass-card">
                            <h3>Senior (62+) & Junior</h3>
                            <div className="price">$310<span>/year + tax</span></div>
                            <p className="monthly">or $29.75/month for 11 months</p>
                        </div>

                        <div className="pass-card">
                            <h3>Family - 3 Pass Holder</h3>
                            <div className="price">$485<span>/year + tax</span></div>
                            <p className="monthly">or $46.50/month for 11 months</p>
                        </div>

                        <div className="pass-card">
                            <h3>Family - 4 Pass Holder</h3>
                            <div className="price">$510<span>/year + tax</span></div>
                            <p className="monthly">or $49.50/month for 11 months</p>
                        </div>

                        <div className="pass-card">
                            <h3>Wheelchair</h3>
                            <div className="price">$50<span>/year + tax</span></div>
                        </div>
                    </div>

                    <div className="enroll-info reveal" ref={addToRefs}>
                        <h4>To Enroll:</h4>
                        <ul>
                            <li><strong>Paying up front annually:</strong> Call 402-441-7095 or email <a href="mailto:woodsleagues@gmail.com">woodsleagues@gmail.com</a></li>
                            <li><strong>Paying monthly:</strong> <a href="https://forms.gle/t9viKRpvnax2RZRM7" target="_blank" rel="noopener noreferrer">Click here to sign up</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Seasonal Pass Pricing */}
            <section className="section" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>Seasonal Pass Pricing</h2>
                        <p className="section-subtitle">
                            Summer: May 1 - August 31 | Winter: September 1 - April 30<br />
                            <span className="fine-print">No prorating</span>
                        </p>
                    </div>

                    <div className="seasonal-grid reveal" ref={addToRefs}>
                        <div className="seasonal-card">
                            <h3>Adult</h3>
                            <div className="seasonal-prices">
                                <div className="season">
                                    <span className="label">Summer</span>
                                    <span className="price">$165 + tax</span>
                                </div>
                                <div className="season">
                                    <span className="label">Winter</span>
                                    <span className="price">$200 + tax</span>
                                </div>
                            </div>
                        </div>

                        <div className="seasonal-card">
                            <h3>Senior (62+) & Junior</h3>
                            <div className="seasonal-prices">
                                <div className="season">
                                    <span className="label">Summer</span>
                                    <span className="price">$145 + tax</span>
                                </div>
                                <div className="season">
                                    <span className="label">Winter</span>
                                    <span className="price">$180 + tax</span>
                                </div>
                            </div>
                        </div>

                        <div className="seasonal-card">
                            <h3>Family - 2 Pass Holder</h3>
                            <div className="seasonal-prices">
                                <div className="season">
                                    <span className="label">Summer</span>
                                    <span className="price">$255 + tax</span>
                                </div>
                                <div className="season">
                                    <span className="label">Winter</span>
                                    <span className="price">$310 + tax</span>
                                </div>
                            </div>
                        </div>

                        <div className="seasonal-card special">
                            <h3>Winter Break Jr Pass</h3>
                            <p className="subtitle">COLLEGE STUDENTS ONLY</p>
                            <div className="price-single">$30 + tax</div>
                            <p className="details">Receive all benefits of a Jr Pass Holder. Good for 1 month from date of purchase.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pass Holder Benefits */}
            <section className="section section-dark" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>Pass Holder Benefits</h2>
                    </div>

                    <div className="benefits-grid reveal" ref={addToRefs}>
                        <div className="benefit-column">
                            <h3>Adults</h3>
                            <ul>
                                <li>Free outdoor courts, all the time (for USTA & leagues played outdoors with balls provided, pass holders just pay the $1 ball fee)</li>
                                <li>Reduced indoor courts</li>
                                <li>Reduced prices on ball machine</li>
                                <li>Reduced prices on private and semi-private lessons</li>
                                <li>Additional price reduction on indoor courts Mon-Fri, 11 am-3 pm</li>
                            </ul>
                        </div>

                        <div className="benefit-column">
                            <h3>Juniors</h3>
                            <ul>
                                <li>Free outdoor courts, all the time</li>
                                <li>Reduced prices on private and semi-private lessons</li>
                                <li>Free in-house tournaments</li>
                                <li><strong>Ball machine: Free "Day-Of"</strong>
                                    <ul>
                                        <li>Call the day you want to use the ball machine</li>
                                        <li>60-minute limit per day</li>
                                        <li>Reduced ball machine when reservation made a day or more in advance</li>
                                    </ul>
                                </li>
                                <li><strong>Indoor court time: Free "Day-Of"</strong>
                                    <ul>
                                        <li>Call the day you want a court and your portion of the court will be free</li>
                                        <li>Opponents/parents will pay for their share of the court unless they're a junior pass holder</li>
                                        <li>90-minute limit per day</li>
                                        <li>Reduced indoor courts when reservation made a day or more in advance</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Should I be a pass holder? */}
            <section className="section" ref={addToRefs}>
                <div className="container">
                    <div className="decision-section reveal" ref={addToRefs}>
                        <h2>Should I Be a Pass Holder?</h2>
                        <p>
                            You don't need a membership to play at Woods Tennis Center. However, becoming a pass holder
                            makes sense for the <strong>avid player (twice a week or more)</strong> or anyone who does
                            <strong>regular private lessons (2 privates a month or more)</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Scholarship Section */}
            <section className="section section-gray" ref={addToRefs}>
                <div className="container">
                    <div className="scholarship-section reveal" ref={addToRefs}>
                        <h2>Scholarship Opportunities</h2>
                        <p>
                            Woods Tennis Center takes its theme of "Taking the Game to the Community" seriously.
                            Each year over 30 adults and juniors receive scholarship assistance to learn this lifetime sport.
                        </p>
                        <p>
                            Please contact us for scholarship information. 1040 US Individual Income Tax Return
                            showing dependents and total income required.
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Contact Us for Scholarship Info
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Pricing;
