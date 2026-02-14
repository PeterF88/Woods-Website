import TabbedPage from '../components/TabbedPage';
import Calendar from './Calendar';
import HeartlandChallenge from './HeartlandChallenge';
import Foundation from './Foundation';

const EventsMain = () => {
    return (
        <TabbedPage
            title="Events"
            heroImage="https://images.unsplash.com/photo-1518609372132-72a31969a571?w=1920&h=600&fit=crop"
            introContent={
                <div>
                    <p>
                        Stay up to date with the latest tournaments and special events at Woods Tennis Center.
                        Join us for exciting competitions and community gatherings.
                    </p>
                </div>
            }
            tabs={[
                { label: 'Calendar', content: <Calendar /> },
                { label: 'Heartland Challenge', content: <HeartlandChallenge /> },
                { label: 'The Woods Event', content: <Foundation /> },
            ]}
        />
    );
};

export default EventsMain;
