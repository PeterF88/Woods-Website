import TabbedPage from '../components/TabbedPage';
import Adaptive from './Adaptive';
import Satellite from './Satellite';
import CommunityAccess from './CommunityAccess';
import Shop from './Shop';

const Community = () => {
    return (
        <TabbedPage
            title="Community & Access"
            heroImage="https://images.unsplash.com/photo-1530910361809-d3f36b9b3d05?w=1920&h=600&fit=crop"
            introContent={
                <div>
                    <p>
                        Woods Tennis Center is committed to making tennis accessible to everyone in our community.
                        Explore our adaptive programs, satellite locations, and community resources.
                    </p>
                </div>
            }
            tabs={[
                { label: 'Adaptive / Wheelchair', content: <Adaptive /> },
                { label: 'Satellite Sites', content: <Satellite /> },
                { label: 'Community Access', content: <CommunityAccess /> },
                { label: 'Community Closet', content: <Shop /> },
            ]}
        />
    );
};

export default Community;
