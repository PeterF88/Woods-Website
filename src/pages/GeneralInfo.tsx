import TabbedPage from '../components/TabbedPage';
import Pricing from './Pricing';
import Policies from './Policies';
import Shop from './Shop';
import Contact from './Contact';

const GeneralInfo = () => {
    return (
        <TabbedPage
            title="General Info"
            heroImage="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1920&h=600&fit=crop"
            introContent={
                <div>
                    <p>
                        Everything you need to know about visiting and playing at Woods Tennis Center.
                        Find information on pricing, memberships, policies, our pro shop, and how to contact us.
                    </p>
                </div>
            }
            tabs={[
                { label: 'Pricing & Memberships', content: <Pricing /> },
                { label: 'Policies & Weather', content: <Policies /> },
                { label: 'Woods Shop', content: <Shop /> },
                { label: 'Location & Contact', content: <Contact /> },
            ]}
        />
    );
};

export default GeneralInfo;
