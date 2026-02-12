interface SharedClubChampionshipsProps {
    sectionRef: (el: HTMLElement | null) => void;
}

const SharedClubChampionships = ({ sectionRef }: SharedClubChampionshipsProps) => {
    return (
        <section
            id="indoor-club-champs"
            className="register-section alt-bg"
            ref={sectionRef}
        >
            <div className="container">
                <h2>Indoor Club Championships</h2>
                <p className="section-intro">
                    Must have been in group classes, lessons, or leagues within the past year
                </p>

                <div className="tournament-cards">
                    {/* Juniors */}
                    <div className="tournament-card">
                        <h3>Juniors</h3>
                        <p className="tournament-subtitle">(HS and below)</p>
                        <p className="tournament-date">Feb 23–28</p>
                        <a
                            href="https://www.woodstenniscenter.com/_files/ugd/e379dc_6c7e5ef6ab9140cdaf769ce315329fcb.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-link"
                        >
                            📄 View Details (PDF)
                        </a>
                        <br />
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSe8ETXPGK5VkGKVmCJFkjVnaZQbH-Ys_C0LHar71G7B9kPIpQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="register-btn full-width"
                        >
                            Click here to register
                        </a>
                    </div>

                    {/* Adult Doubles */}
                    <div className="tournament-card">
                        <h3>Adult Doubles</h3>
                        <p className="tournament-subtitle">(must be out of HS)</p>
                        <p className="tournament-date">March 1</p>
                        <a
                            href="https://www.woodstenniscenter.com/_files/ugd/e379dc_6c7e5ef6ab9140cdaf769ce315329fcb.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-link"
                        >
                            📄 View Details (PDF)
                        </a>
                        <br />
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfdDUqyJodHtgPMYIktgluTY3Fllyr8P9bVOhIwrh-TVzMD3A/viewform?usp=sharing&ouid=101422289595401124986"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="register-btn full-width"
                        >
                            Click here to register
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SharedClubChampionships;
