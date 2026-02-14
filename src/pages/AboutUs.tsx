import TabbedPage from '../components/TabbedPage';
import About from './About';
import Team from './Team';
import Board from './Board';
import JoinOurTeam from './JoinOurTeam';
import Foundation from './Foundation';
import PhaseII from './PhaseII';

const AboutUs = () => {
    return (
        <TabbedPage
            title="About Us"
            heroImage="https://images.unsplash.com/photo-1549643444-facfc83e7bdd?w=1920&h=600&fit=crop"
            introContent={
                <div>
                    <p>
                        Learn more about the history, mission, and people behind Woods Tennis Center.
                        We are dedicated to growing the game of tennis and serving our community.
                    </p>
                </div>
            }
            tabs={[
                { label: 'Our Story', content: <About /> },
                { label: 'Our Team', content: <Team /> },
                { label: 'Our Board', content: <Board /> },
                { label: 'Join Our Team', content: <JoinOurTeam /> },
                { label: 'Foundation', content: <Foundation /> },
                { label: 'Phase II', content: <PhaseII /> },
            ]}
        />
    );
};

export default AboutUs;
