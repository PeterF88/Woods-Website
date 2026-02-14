import TabbedPage from '../components/TabbedPage';
import AdultClasses from './AdultClasses';
import AdultRegister from './AdultRegister';

const AdultTennis = () => {
    return (
        <TabbedPage
            title="Adult Tennis"
            heroImage="https://images.unsplash.com/photo-1622163158430-67c23a7c6450?w=1920&h=600&fit=crop"
            introContent={
                <div>
                    <p>
                        From beginner clinics to competitive leagues, Woods Tennis Center has something for every adult player.
                        Stay active, meet new people, and improve your game with our comprehensive adult programming.
                    </p>
                </div>
            }
            tabs={[
                { label: 'Adult Classes & Drills', content: <AdultClasses /> },
                { label: 'Register for Classes', content: <AdultRegister /> },
            ]}
        />
    );
};

export default AdultTennis;
