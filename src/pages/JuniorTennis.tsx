import TabbedPage from '../components/TabbedPage';
import JuniorClasses from './JuniorClasses';
import PrivateLessons from './PrivateLessons';
import Outreach from './Outreach';
import JuniorRegister from './JuniorRegister';
import Resources from './Resources';

const JuniorTennis = () => {
    return (
        <TabbedPage
            title="Junior Tennis"
            heroImage="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1920&h=600&fit=crop"
            introContent={
                <div>
                    <p>
                        Woods Tennis Center offers a complete junior development pathway, from introductory classes for young children
                        to high-performance tournament training. Our goal is to instill a lifelong love of the game while developing
                        character, sportsmanship, and athletic skills.
                    </p>
                </div>
            }
            tabs={[
                { label: 'Junior Class Descriptions', content: <JuniorClasses hideHero /> },
                { label: 'Private Lessons', content: <PrivateLessons hideHero /> },
                { label: 'Outreach / NJTL', content: <Outreach hideHero /> },
                { label: 'Register for Classes', content: <JuniorRegister hideHero /> },
                { label: 'Resources', content: <Resources hideHero /> },
            ]}
        />
    );
};

export default JuniorTennis;
