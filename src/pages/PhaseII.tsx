import { useEffect, useRef } from 'react';
import './PhaseII.css';

const PhaseII = () => {
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
        <main className="phase-ii-page">
            {/* Hero Banner */}
            <div className="phasetwo-hero reveal" ref={addToRefs}>
                <div className="phasetwo-hero-image">
                    <img src="/phasetwo-hero.png" alt="Tennis courts with rainbow" />
                </div>
                <div className="phasetwo-hero-title">
                    <h1>An Open Letter to Our Community</h1>
                </div>
            </div>

            {/* Content Cards */}
            <div className="phasetwo-content">
                {/* 5/2/24 Expansion Update */}
                <div className="phasetwo-card reveal" ref={addToRefs}>
                    <h2>5/2/24 - Expansion Update</h2>

                    <p>
                        With our recent announcement of withdrawing the expansion at Woods Park &amp; Sports Complex,
                        we have fielded numerous questions about &ldquo;what&rsquo;s going to happen next?&rdquo; While
                        we don&rsquo;t have specifics to share at this early stage, we wanted to provide some clarity as
                        to where we are in the process.
                    </p>

                    <p>
                        We are currently working with Lincoln Parks &amp; Recreation to identify potential site locations
                        for a new tennis facility. This could be either public park or private land. As we consider
                        possible locations there are many factors that will be considered (accessibility, proximity to
                        major arterials and amenities, parking, and additional growth opportunities, just to name a few).
                        The reality is that we are very much in the preliminary stages and are looking at a 3–4 year
                        window before completing a new facility (site selection/prep, design, fundraising, construction,
                        etc.)
                    </p>

                    <p>
                        We will continue to offer the same programming/events/scheduling/facilities here at Woods that
                        you have come to expect. We cannot stress enough how much we value and appreciate the support of
                        our many patrons. The Woods tennis &ldquo;family&rdquo; is so much more than buildings and
                        concrete. That will not change, regardless of where we call home.
                    </p>
                </div>

                {/* 4/23/2024 Open Letter */}
                <div className="phasetwo-card reveal" ref={addToRefs}>
                    <h3>4/23/2024</h3>

                    <p>
                        As you may have seen/heard, the Friends of Woods Tennis (FOWT), Lincoln Parks and Recreation and
                        Mayor Gaylor-Baird announced that we have formally withdrawn our proposal for expansion at Woods
                        Park and Sports Complex. We wanted to provide you with additional context and more insight into
                        our plans and dreams for what will no doubt be a very exciting future.
                    </p>

                    <p>
                        First, the decisions behind the proposed expansion, as well as withdrawal of the proposal have
                        not come lightly and without a fair amount of challenging deliberation. There is no question that
                        tennis programming and facilities must expand to meet Lincoln&rsquo;s current and future demand.
                        In &ldquo;Taking the Game to the Community,&rdquo; we seek to provide the highest quality of
                        public programming, while creating equity within the sport. As a result of our success, we have
                        reached capacity issues that are ongoing. These capacity issues along with bigger dreams have
                        helped us realize that our vision cannot be achieved at Woods Park.
                    </p>

                    <p>
                        Throughout the process, our proposals have been met with resistance. We have maintained a spirit
                        of collaboration/compromise but have not been met with the same. While we expected lively
                        discussion from all sides, the treatment of our staff, patrons and facilities has been unexpected
                        and disappointing.
                    </p>

                    <p>
                        After much discussion with Parks and Recreation, we have made the decision to look beyond the
                        confines of Woods Park, opening the doors to some very exciting possibilities. A blank slate
                        provides the opportunity to dream bigger in ways that we can further impact the community and
                        those who want and believe in the value of what we bring. This move is not only best for our
                        immediate Woods &ldquo;family,&rdquo; but for all players present and future, as well as the
                        broader tennis community. It is incumbent upon us to provide an atmosphere that is safe,
                        welcoming, and inclusive, with room to grow.
                    </p>

                    <p>
                        One of the things that has been misrepresented/misunderstood is the relationship between Friends
                        of Woods Tennis and Lincoln Parks and Recreation. While FOWT is a private, non-profit
                        organization, we are contracted by the City of Lincoln to bring tennis programming and
                        opportunities to area residents of all ages, abilities and backgrounds. We are a 100%
                        self-sustaining operation with a percentage of our revenue set aside for facility maintenance.
                    </p>

                    <p>
                        We are valuable partners with Parks and Recreation and they have a vested interest in FOWT being
                        successful in expanding the game to as many area players as possible. Without FOWT, Parks and
                        Recreation would not be able to provide the same exceptional level of playing surfaces,
                        instruction, programming, and outreach to the public/community. Lincoln Public Schools, Pius X,
                        and Lincoln Christian all rely on Woods Tennis Center to conduct their matches, as does NSAA,
                        USTA, Cornhusker State Games and Special Olympics Nebraska. In all, we serve thousands of players
                        and their families every year.
                    </p>

                    <p>
                        We are currently working with Parks and Recreation to consider alternatives that would better
                        suit the current and future needs of tennis in Lincoln. Our goal would be to build a new,
                        state-of-the-art tennis center that would not only accommodate needs for court availability, but
                        training facilities, educational classroom/mentoring space, as well as other attractive
                        amenities. We envision the premier facility in the Nebraska/Missouri Valley region, and a
                        shining example of what tennis can and should be. We have always been very inventive and
                        progressive with our programming, and we look forward to continuing that as we go forward.
                        Exciting possibilities exist with the full support of Parks and Recreation and Mayor Gaylor-Baird.
                    </p>

                    <p>
                        So what can you do? Continue to stay engaged with Woods Tennis Center and continue to be a good
                        neighbor as we move further through this process. Your unwavering support/commitment to our
                        work/program-current and future-has not gone unnoticed. We sincerely appreciate our patrons and
                        supporters lending their voice to the process via letters/emails to Parks and Recreation, the
                        Mayor, and City Council, as well as those who completed the community survey, and who spoke on
                        our behalf at the recent community meetings. We weigh the disappointment of eventually leaving
                        Woods Park against the excitement and possibilities for what can come next. We will continue to
                        keep you updated as we move further down the path of &ldquo;Taking the Game to the Community.&rdquo;
                    </p>
                </div>
            </div>
        </main>
    );
};

export default PhaseII;
