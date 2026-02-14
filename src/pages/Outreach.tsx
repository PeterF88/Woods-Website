import './Outreach.css';

interface OutreachProps {
    hideHero?: boolean;
}

const Outreach: React.FC<OutreachProps> = ({ hideHero }) => {
    const communitySchools = [
        'Belmont Elementary', 'Calvert Elementary', 'Clinton Elementary', 'Culler Middle',
        'Dawes Middle', 'Elliott Elementary', 'Goodrich Middle', 'Hartley Elementary',
        'Holmes Elementary', 'Lefler Middle', 'McPhee Elementary', 'Mickle Middle',
        'Park Middle', 'Randolph Elementary', 'Riley Elementary', 'Saratoga Elementary',
        'Waverly Public Schools', 'West Lincoln Elementary'
    ];

    const communityParks = [
        'Ballard Park', 'Cooper Park', 'Eden Park', 'Henry Park', 'Highlands Park',
        'Irvingdale Park', 'Mahoney Park', 'Peter Pan Park', 'Roberts Park', 'Roper Park',
        'Seacrest Park', 'Tierra/Briarhurst Park', 'Tyrell Park', 'University Place Park', 'UPCO Park'
    ];

    const recCenters = [
        'Air Park Rec Center', 'Belmont Rec Center', 'Calvert Rec Center',
        'F Street Rec Center', 'Irving Rec Center'
    ];

    const galleryImages = [
        'https://static.wixstatic.com/media/010578_19c2218276204301957e54243aaa4f39~mv2.jpg/v1/fill/w_248,h_248,q_90,enc_avif,quality_auto/010578_19c2218276204301957e54243aaa4f39~mv2.jpg',
        'https://static.wixstatic.com/media/010578_183e7387eb5f459ea62da251289d9033~mv2.jpg/v1/fill/w_248,h_248,q_90,enc_avif,quality_auto/010578_183e7387eb5f459ea62da251289d9033~mv2.jpg',
        'https://static.wixstatic.com/media/51e17a_0aef1e4b3896499ea7739376fae742ae~mv2.png/v1/fill/w_248,h_248,fp_0.46_0.41,q_90,enc_avif,quality_auto/51e17a_0aef1e4b3896499ea7739376fae742ae~mv2.png',
        'https://static.wixstatic.com/media/010578_648160f3221f421ba83f0c9f3222a96f~mv2.jpg/v1/fill/w_248,h_248,q_90,enc_avif,quality_auto/010578_648160f3221f421ba83f0c9f3222a96f~mv2.jpg',
        'https://static.wixstatic.com/media/010578_19bc4a514c3742e7902aa46b522f432b~mv2.jpg/v1/fill/w_248,h_248,q_90,enc_avif,quality_auto/010578_19bc4a514c3742e7902aa46b522f432b~mv2.jpg',
    ];

    return (
        <main className="outreach-page">
            {/* Yellow Banner - "Community Outreach Program" */}
            {!hideHero && (
                <section className="outreach-banner">
                    <h1 className="outreach-banner-title">Community Outreach Program</h1>
                </section>
            )}

            {/* NJTL / USTA Foundation Section */}
            <section className="outreach-njtl-section">
                <div className="outreach-njtl-content">
                    <img
                        src="https://static.wixstatic.com/media/010578_4e69547c8490427d91e00cf18bde618b~mv2.png/v1/fill/w_598,h_70,al_c,q_85,enc_avif,quality_auto/USTA-Foundation_1c-white-RGB-horizontal-01.png"
                        alt="USTA Foundation"
                        className="outreach-usta-logo"
                    />
                    <p className="outreach-njtl-bold">
                        Woods Tennis Center is a National Junior Tennis and Learning (NJTL) site.
                    </p>
                    <p className="outreach-njtl-text">
                        The NJTL network features more than 150 non-profit youth development organizations across the
                        country that offer free or low-cost tennis and education programming to over 160,000 under-resourced
                        youth each year.
                    </p>
                    <p className="outreach-njtl-text">
                        This prestigious accreditation was awarded to Woods Tennis Center because of the vast community
                        outreach programming we provide across the city through strong partnerships with Community
                        Learning Centers', Lincoln City Parks &amp; Rec Centers and other local non-profits and cultural centers.
                    </p>
                </div>
            </section>

            {/* Tennis + Education Section */}
            <section className="outreach-pillars-section">
                <h2 className="outreach-pillars-heading">Tennis + Education = Changes Youth Lives</h2>
                <p className="outreach-pillars-subheading">Community Outreach Program</p>

                <div className="outreach-pillars-row">
                    {/* Tennis Pillar */}
                    <div className="outreach-pillar">
                        <div className="outreach-pillar-icon">
                            <svg viewBox="0 0 100 100" width="120" height="120">
                                <circle cx="35" cy="55" r="20" fill="none" stroke="#E2E624" strokeWidth="3" />
                                <line x1="55" y1="35" x2="90" y2="10" stroke="#E2E624" strokeWidth="4" strokeLinecap="round" />
                                <line x1="25" y1="45" x2="45" y2="65" stroke="#E2E624" strokeWidth="2" />
                                <line x1="35" y1="35" x2="35" y2="75" stroke="#E2E624" strokeWidth="2" />
                                <line x1="15" y1="55" x2="55" y2="55" stroke="#E2E624" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3 className="outreach-pillar-title">Tennis</h3>
                        <p className="outreach-pillar-text">
                            Our team brings tennis to wherever youth in our community are, teaching the lifetime game
                            on any flat surface - gym, parking lot, classroom, turf, hallway...we make it work!
                        </p>
                        <p className="outreach-pillar-text">
                            All instruction is research-based and focused on important character components.
                        </p>
                    </div>

                    {/* Education Pillar */}
                    <div className="outreach-pillar">
                        <div className="outreach-pillar-icon">
                            <svg viewBox="0 0 100 100" width="120" height="120">
                                <circle cx="50" cy="55" r="25" fill="#E2E624" opacity="0.3" />
                                <path d="M30 70 L30 35 Q50 25 70 35 L70 70 Q50 60 30 70Z" fill="none" stroke="#333" strokeWidth="2.5" />
                                <line x1="50" y1="30" x2="50" y2="65" stroke="#333" strokeWidth="2" />
                                <path d="M32 40 Q50 32 68 40" fill="none" stroke="#333" strokeWidth="1.5" />
                                <path d="M32 50 Q50 42 68 50" fill="none" stroke="#333" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <h3 className="outreach-pillar-title">Education</h3>
                        <p className="outreach-pillar-text">
                            We complement on-court instruction with off-court educational activities, using tennis
                            as the bridge to engage youth in meaningful learning.
                        </p>
                        <p className="outreach-pillar-text">Example programs include:</p>
                        <ul className="outreach-pillar-list">
                            <li>STEAM Activities</li>
                            <li>Mentorship &amp; Leadership</li>
                            <li>Summer Movie Series</li>
                            <li>And much more...</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Full-width community photo */}
            <section className="outreach-photo-section">
                <img
                    src="https://static.wixstatic.com/media/010578_22a0b77920c845768347ee73b344ffb0~mv2.jpg/v1/crop/x_0,y_1287,w_6240,h_2554/fill/w_978,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/McPhee-7_JPG.jpg"
                    alt="Community outreach tennis lesson in a gymnasium"
                    className="outreach-community-photo"
                />
            </section>

            {/* Taking the Game to the Community */}
            <section className="outreach-mission-section">
                <div className="outreach-mission-content">
                    <h2 className="outreach-mission-heading">Taking the Game to the Community</h2>
                    <p>
                        Beginning in 2008, Woods Tennis Center has offered affordable lessons for children and community
                        members at our home base in Woods Park. Since then, we have expanded our program to include city
                        recreation centers, public parks and schools, local nonprofit organizations, and the Lincoln Community
                        Learning Centers across the city of Lincoln and surrounding areas. Our community outreach programming
                        provides quality coaching and equipment with research-based curriculum. Woods also offers several
                        partial and full scholarships to children from these centers who set themselves apart in their
                        dedication to and love for the sport to join us at our facility.
                    </p>
                    <p>
                        Over the years, the community outreach programming has continued to emphasize inclusiveness,
                        partnering with nonprofits focused on empowering at-promise youth and teens, adding an adaptive
                        program for children with neurodivergence and other intellectual disabilities, and working with
                        local organizations serving refugee and migrant youth. The priority at Woods Tennis continues to be
                        identifying and breaking down barriers so everyone in our community feels welcomed to play the sport.
                    </p>
                    <p>
                        Woods Tennis Center is also proud to be a good neighbor and community organization. When courts are
                        available, we provide racquets and free court time to residents of the surrounding neighborhoods who
                        wish to utilize our facility. Additionally, Woods youth players and patrons participate in summer
                        volunteer days to clean up and maintain the local tennis courts around the city, repainting court
                        lines, pulling weeds, and fixing nets. "Taking the Game to the Community" is a mission Woods embodies
                        across all aspects.
                    </p>
                </div>
            </section>

            {/* YouTube Video */}
            <section className="outreach-video-section">
                <div className="outreach-video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/sTELVlx-fx0"
                        title="Woods Tennis: Taking the Game to the Community (Youth Programs)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* Community Outreach Locations */}
            <section className="outreach-locations-section">
                <h2 className="outreach-locations-heading">Community Outreach Locations</h2>

                {/* Map Image */}
                <div className="outreach-map-container">
                    <img
                        src="https://static.wixstatic.com/media/51e17a_aaea5422c73448aca4d0b93e6bbc173e~mv2.png/v1/crop/x_0,y_119,w_3360,h_1651/fill/w_1439,h_707,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Community%20Map-2.png"
                        alt="Community Outreach Locations Map of Lincoln, Nebraska"
                        className="outreach-map-img"
                    />
                </div>

                {/* Location Lists */}
                <div className="outreach-locations-grid">
                    <div className="outreach-location-column">
                        <h3 className="outreach-location-title">Community Sites</h3>
                        {communitySchools.map((school, index) => (
                            <p key={index} className="outreach-location-item">{school}</p>
                        ))}
                    </div>

                    <div className="outreach-location-column">
                        <h3 className="outreach-location-title">Community Parks</h3>
                        {communityParks.map((park, index) => (
                            <p key={index} className="outreach-location-item">{park}</p>
                        ))}
                    </div>

                    <div className="outreach-location-column">
                        <h3 className="outreach-location-title">Community Recreation Sites</h3>
                        {recCenters.map((center, index) => (
                            <p key={index} className="outreach-location-item">{center}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="outreach-gallery-section">
                <div className="outreach-gallery-grid">
                    {galleryImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Community outreach activity ${index + 1}`}
                            className="outreach-gallery-img"
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Outreach;
