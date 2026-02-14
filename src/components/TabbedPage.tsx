import { useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import './TabbedPage.css';

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface TabbedPageProps {
    title: string;
    heroImage: string;
    introContent: React.ReactNode;
    tabs: Tab[];
}

const TabbedPage = ({ title, heroImage, introContent, tabs }: TabbedPageProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = useMemo(() => {
        const tabParam = searchParams.get('tab');
        if (tabParam !== null) {
            return Math.min(Math.max(parseInt(tabParam, 10) || 0, 0), tabs.length - 1);
        }
        return 0;
    }, [searchParams, tabs.length]);

    const handleTabClick = useCallback((index: number) => {
        setSearchParams({ tab: String(index) }, { replace: true });
    }, [setSearchParams]);

    return (
        <div className="tabbed-page">
            {/* Hero Section */}
            <section className="tabbed-hero">
                <div
                    className="tabbed-hero-background"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
                <div className="tabbed-hero-overlay" />
                <div className="tabbed-hero-content">
                    <h1>{title}</h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="tabbed-intro container">
                {introContent}
            </section>

            {/* Tabs Navigation */}
            <section className="tabs-container container">
                <div className="tabs-nav">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    {tabs[activeTab].content}
                </div>
            </section>
        </div>
    );
};

export default TabbedPage;
