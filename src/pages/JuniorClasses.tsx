import React, { useState } from 'react';
import '../index.css';
import './JuniorClasses.css';
import ProgressionChart from '../assets/ProgressionChart.png';

interface JuniorClassesProps {
    hideHero?: boolean;
}

const JuniorClasses: React.FC<JuniorClassesProps> = ({ hideHero }) => {
    const tabs = [
        { id: 'little-aces', label: 'Little Aces' },
        { id: 'red-ball', label: 'Red' },
        { id: 'orange-ball', label: 'Orange' },
        { id: 'green-ball', label: 'Green' },
        { id: 'yellow-ball', label: 'Yellow' },
        { id: 'teen-green', label: 'Teen Green' },
        { id: 'high-school', label: 'High School' },
        { id: 'tournament-pathway', label: 'Tournament Pathway' },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [orangeSubTab, setOrangeSubTab] = useState<'orange' | 'intro-orange'>('orange');

    const renderContent = () => {
        switch (activeTab) {
            case 'little-aces':
                return (
                    <section className="junior-section-tab">
                        <h2 className="junior-section-title">Little Aces</h2>
                        <div className="junior-section-text">
                            <p>Our Little Aces Class uses foam balls that are larger than a regular tennis ball on a smaller court with no net. The larger and slower balls help to build new skills, and the smaller space and no net help to encourage rallying with a partner.</p>
                            <p>The aim of the Little Aces class is to give players a fun and exciting introduction to the sport of tennis. It is essentially a tennis-themed motor skills class. Players will learn the body control and movements that will help them develop into tennis players, and be introduced to tennis as a rally-based sport.</p>

                            <h4>Physical Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Good balance during movements</li>
                                <li>Ability to change direction</li>
                                <li>Ball tracking skills and ability to react to ball away from them</li>
                                <li>Catching skills over different heights</li>
                                <li>Develop underarm passing skills</li>
                                <li>Develop overarm throwing skills</li>
                                <li>Understanding and using the ready position</li>
                                <li>Being able to identify the correct grip and hand placement on forehand and backhand</li>
                                <li>Able to consistently make contact with balls after one bounce</li>
                                <li>Able to consistently make drop feeds with relative accuracy</li>
                            </ul>

                            <h4>Social and Mental Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Fun and enjoyment</li>
                                <li>Polite interaction with teacher</li>
                                <li>Listens to instructions</li>
                                <li>Follows our class rules consistently</li>
                                <li>Positive interactions with other class members</li>
                                <li>Working together to develop rally skills</li>
                                <li>Shows signs of more independent learning</li>
                            </ul>

                            <h4>Rally-Based Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Understand areas of the court</li>
                                <li>10 ball rolls along ground with partner</li>
                                <li>10 underarm toss and catch with partner</li>
                                <li>Basic rally understanding. Understand that tennis is rallying between two people</li>
                                <li>Defending an area while rolling ball</li>
                                <li>5 "throw-hit-catch" with partner</li>
                            </ul>

                            <h4>How can parents help?</h4>
                            <p>Little Aces is meant to be a fun introduction to tennis while building the necessary skills to be prepared for future tennis classes. Practicing gross motor skills at home or while practicing any other sport can really help. Any skills like throwing, catching or even kicking would be beneficial. Practicing these skills at a young age can help across a number of different sports, not just tennis.  With Little Aces it’s important to remember that everyone learns and develops at their own speeds so there is no exact number of classes needed to "master" Little Aces.</p>
                            <p>Our lessons around town in the local parks, follow the same structure as those here at Woods. For further information about lessons in the parks please contact the front desk on the email below. Up to date weather information for parks lessons can be found on our Facebook page.</p>

                            <div className="video-container mt-4">
                                <iframe src="https://www.youtube.com/embed/u_E58uhdNck" title="Little Aces" allowFullScreen></iframe>
                            </div>
                        </div>
                    </section>
                );
            case 'red-ball':
                return (
                    <section className="junior-section-tab">
                        <h2 className="junior-section-title">Red</h2>
                        <div className="junior-section-text">
                            <p>Our Red Ball Class is run with balls that are larger and slower than a regular tennis ball on a 36 foot court with a lower net. The red ball court is great for players 8 and under, but the class is great for beginners up to 11 years old.</p>
                            <p>The aim of the Red Ball beginner class is to continue to teach tennis in a fun atmosphere, with the goal of having players rally together at the appropriate level. Some key techniques that will be used in all groups will be introduced here, but the focus will be on how to use these skills while rallying. The ability to play points and rally with an opponent from a young age are key to the enjoyment and progression of skills.</p>

                            <h4>Rally Based Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Understand importance of rallying</li>
                                <li>Serve with continental grip</li>
                                <li>Develop ball control (accuracy and depth)</li>
                                <li>Ability to attack and defend space</li>
                                <li>Know how to keep score</li>
                                <li>Forehand grip: between eastern and semi-western</li>
                                <li>Backhand grip: continental bottom hand, semi-western top hand for two hander.</li>
                                <li>Knowing different grips, how to change them and when to use them</li>
                                <li>Volley with continental grip, and knowing when to volley</li>
                                <li>Ability to serve 6 out of 10 from the baseline</li>
                                <li>Rally 10 balls over the net from baseline using correct grips</li>
                            </ul>

                            <h4>Physical Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Ability to read and react in all directions</li>
                                <li>Ability to track ball height and work in different heights</li>
                                <li>Agility and ability change directions</li>
                                <li>Dynamic Balance – hitting shots while still moving</li>
                            </ul>

                            <h4>Social and Mental Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Rallies need to be mainly co-operative to develop rallying with a partner</li>
                                <li>Introduction to competitive rallying</li>
                                <li>Winning and losing with respect for opponent and game</li>
                                <li>Understanding of problem solving and decision making – as it applies to tennis</li>
                                <li>Working with a partner in doubles points.</li>
                            </ul>

                            <h4>How can parents help?</h4>
                            <p>The Red Ball Class is player’s first exposure to rallying and what we view as real tennis – two or four players hitting the ball back and forward with each other and trying to keep a rally going. Watch some tennis, encourage kids to watch older kids and the professionals play so they can associate what they do with what happens on a full size court. Encourage players to solve their own problems and to fix their own mistakes.</p>

                            <div className="video-column mt-4">
                                <div className="video-container">
                                    <iframe src="https://www.youtube.com/embed/XStD50fQ2iI" title="Red Ball 1" allowFullScreen></iframe>
                                </div>
                                <div className="video-container">
                                    <iframe src="https://www.youtube.com/embed/LZY_iF7EjyY" title="Red Ball 2" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'orange-ball':
                return (
                    <section className="junior-section-tab">
                        <h2 className="junior-section-title">Orange</h2>
                        <div className="tabs-nav sub-tabs" style={{ marginBottom: '1.5rem' }}>
                            <button
                                className={`tab-btn ${orangeSubTab === 'orange' ? 'active' : ''}`}
                                onClick={() => setOrangeSubTab('orange')}
                            >
                                Orange
                            </button>
                            <button
                                className={`tab-btn ${orangeSubTab === 'intro-orange' ? 'active' : ''}`}
                                onClick={() => setOrangeSubTab('intro-orange')}
                            >
                                Intro Orange
                            </button>
                        </div>
                        {orangeSubTab === 'orange' ? (
                            <div className="junior-section-text">
                                <p>The Orange Ball Class is played on a 60' foot courts with low compression balls and smaller racquets. This court, ball and racquet size combination is great for players 10 and under, but the class will work for players up to 13 years old. We would prefer some playing experience in this class.</p>
                                <p>The aim of the Orange Ball Advanced Beginner Class is to continue the rally-based approach to learning, as well as introducing basic tactics to players. Techniques will be further developed, and players should have a solid base of topspin before moving up. The techniques developed should begin to open up more tactical options for players.</p>

                                <h4>Rally Based Skills</h4>
                                <ul className="junior-skills-list">
                                    <li>Use of topspin grips to hit spin on both sides</li>
                                    <li>Serve and volley with the continental grip</li>
                                    <li>Know how to keep score</li>
                                    <li>Know when to move forward and volley</li>
                                    <li>Understand the use of different strokes for attack and defense.</li>
                                    <li>Introduction to controlling points</li>
                                    <li>Develop full court game</li>
                                    <li>Beginning to be able to hit topspin from different heights</li>
                                    <li>Serve with flow of the arms</li>
                                    <li>Rally 10 in a row from behind the baseline</li>
                                    <li>Serve 6 from 10 in from baseline</li>
                                </ul>

                                <h4>Physical Skills</h4>
                                <ul className="junior-skills-list">
                                    <li>Improve lateral movement to cover full court</li>
                                    <li>Improved reaction and anticipation skills</li>
                                    <li>Beginning to use legs to drive through the ball</li>
                                    <li>Introduction to footwork patterns (Split step, open stance forehands etc.)</li>
                                </ul>

                                <h4>Social and Mental Skills</h4>
                                <ul className="junior-skills-list">
                                    <li>Concentration and focus throughout a lesson and match</li>
                                    <li>Quality of effort throughout a lesson and match</li>
                                    <li>Showing good sportsmanship as competition levels increase</li>
                                    <li>Basic goal setting</li>
                                    <li>Ability to correct minor technical issues on prompting</li>
                                </ul>

                                <h4>How can parents help?</h4>
                                <p>By the end of the Orange Ball Class players should be looking to develop a style that looks like “real tennis”. Exposure to both playing and watching matches can help players to develop their own game style. Tournament and match play is vital to put skills developed into play, and tournament and matches should focus the experience of playing, more than the focus on winning. When hitting with them, make sure that they are using the orange balls on the 60-foot court, this is real tennis.</p>

                                <div className="video-container mt-4">
                                    <iframe src="https://www.youtube.com/embed/iEOA5jwPulo" title="Orange Ball" allowFullScreen></iframe>
                                </div>
                            </div>
                        ) : (
                            <div className="junior-section-text">
                                <p>The Intro Orange class is one of our final pieces for the junior program. It fills the gap for our 11 and 12 year olds that are relatively new to the sport. It is conducted on a smaller court with lower compression balls, that are great for introductory work on the skills needed to progress. The slower balls allow more time for players to adjust and work on techniques and tactics.</p>
                                <p>This class will be the entry point for players new to the sport that are 11 or 12 years old, as well as some red ball players that may have entered our red ball classes a little closer to the maximum age of red.</p>
                            </div>
                        )}
                    </section>
                );
            case 'green-ball':
                return (
                    <section className="junior-section-tab">
                        <h2 className="junior-section-title">Green</h2>
                        <div className="junior-section-text">
                            <p>The Green Ball Class is the next step up from Orange and features slightly lower compression balls on a full size court. It is a great class for those that have progressed through the earlier levels, as well as players in High School or Junior High that have had little playing experience.</p>
                            <p>The aim of the Green Ball Class is to continue the rally-based approach to learning, but allow players to experience tennis on a full size court. Players will be introduced to the regular size court, but still at slower than full speed. Players will have an understanding of basic tactics and how to implement them based on their opponent. The slightly slower balls allow greater tactical development by lengthening rallies.</p>

                            <h4>Rally Based Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Varying trajectory when needed</li>
                                <li>Understanding of why different spins are important</li>
                                <li>Beginning to adapt to different opponents</li>
                                <li>Increase racquet head speed</li>
                                <li>Preparation and anticipation for next shot</li>
                                <li>Attack and defend when needed</li>
                                <li>Topspin both sides from varying heights</li>
                                <li>Ability to adapt to different opponents</li>
                                <li>Rally 10 in a row from behind the baseline</li>
                                <li>Serve 6 from 10 in from baseline</li>
                            </ul>

                            <h4>Physical Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Body control when hitting on the run</li>
                                <li>Explosive first step</li>
                                <li>Leg drive on groundstrokes and serves</li>
                                <li>Show good court coverage</li>
                            </ul>

                            <h4>Social and Mental Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Increase in positive communication and teamwork with doubles partner</li>
                                <li>Ability to correct minor technical issues on prompting</li>
                                <li>Show fight for every point</li>
                                <li>Must continue to compete the right way in matches</li>
                                <li>Concentration on achieving goals for an entire match or training session</li>
                                <li>Beginning to create tactics and game plan</li>
                            </ul>

                            <h4>How can parents help?</h4>
                            <p>The Green Ball Class will be players’ first exposure to tennis on the full size court. Court coverage becomes more important here, as does anticipation. These things can be improved by watching a lot of what the better players do, as well as being involved in sports and activities that require short sprints and quick direction changes. Again match play is important, with a focus still on participation and development in matches, as opposed to winning.</p>

                            <div className="video-container mt-4">
                                <iframe src="https://www.youtube.com/embed/2L1WpV0xPws" title="Green Ball" allowFullScreen></iframe>
                            </div>
                        </div>
                    </section>
                );
            case 'yellow-ball':
                return (
                    <section className="junior-section-tab">
                        <h2 className="junior-section-title">Yellow</h2>
                        <div className="junior-section-text">
                            <p>The aim of the Yellow Ball group is to continue to develop players all court skills and have them ready for tournament and or high school play. Players will continue to develop skills around the whole court and to develop their own personal game style. Players should have confidence in most of their techniques and be beginning to use these to develop tactics to help them in their points.</p>

                            <h4>Rally Based Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Beginning to develop own game style</li>
                                <li>Begin to control points</li>
                                <li>Know when to use different spins</li>
                                <li>Build rally around strengths</li>
                                <li>Develop difference between first and second serve</li>
                                <li>Beginning to attack on first serve</li>
                                <li>Develop full range of shots (e.g. Lob, drop shot)</li>
                                <li>Understand how to use game style against opponent</li>
                            </ul>

                            <h4>Physical Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Ability to hit the ball on the run</li>
                                <li>Advanced footwork patterns (open stance, recovery and split steps)</li>
                                <li>Show anticipation of opponents shot</li>
                            </ul>

                            <h4>Social and Mental Skills</h4>
                            <ul className="junior-skills-list">
                                <li>Set small goals and show self-discipline in achieving them</li>
                                <li>Control anxiety during matches</li>
                                <li>Take pride in effort and performance.</li>
                                <li>Develop routines between points</li>
                            </ul>

                            <h4>How can parents help?</h4>
                            <p>As players get better there needs to be an increase in match play for all players. Young up and coming players need the experience of matches to continue their development, as do players getting ready for high school season. At this level, parents can help development by encouraging players to help them have the confidence to hit in matches the same way the are learning in training, and to have training match the intensity of matches.</p>
                        </div>
                    </section>
                );
            case 'teen-green':
                return (
                    <section className="junior-section-tab">
                        <h2 className="junior-section-title">Teen Green</h2>
                        <div className="junior-section-text">
                            <p>Our Teen Green class is designed specifically for teenagers that are relatively new to the sport. It is conducted on the full size court, with a ball that is slightly slower than a regular yellow ball in order for players to have a little more time to pick up important skills.</p>
                        </div>
                    </section>
                );
            case 'high-school':
                return (
                    <section className="junior-section-tab">
                        <h2 className="junior-section-title">High School (Challenger)</h2>
                        <div className="junior-section-text">
                            <p>The High School Class is our high school aged, non-tournament playing class. It is perfect for reserve, JV, and lower-level varsity players. This class is designed for players who are getting ready for, or loving playing high school tennis and want to learn in a fun environment.</p>
                            <p>We understand that not all players love the tournament grind, but still want to learn and develop, with the aim of playing a higher level of school tennis. We do not intend the High School Class to be an "end-point". For those that wish to become more involved in USTA tournament play as they get older, there are opportunities to move onto the tournament group pathway.</p>
                            <p>Our High School Class has included a number of players who have not only played at State, but also played in finals. A number of weekly match play opportunities exist for this group.</p>
                        </div>
                    </section>
                );
            case 'tournament-pathway':
                return (
                    <section className="junior-section-tab">
                        <h2 className="junior-section-title">Tournament Pathway</h2>
                        <div className="junior-section-text">
                            <p>One of the biggest difficulties in any youth sport, is how to separate players so that everyone can learn in the environment that is best for them.</p>
                            <p>With the increase in use of the Universal Tennis Rating (UTR) system we have found what we believe is an objective way to move players up. The UTR is a rating (as opposed to a ranking) that measures players based their performance against other players. Over the past year we have found the UTR to be an accurate representation of a players current level of play and have been using it as a key determining factor in group placement, and more importantly a tool to help everyone improve.</p>
                            <p>We believe that players improve the most in groups and matches that are their level, not the widely held belief that you get better by playing better people. There is a time and a place for this, but what we see more often than not is players failing to work on their weaknesses against tougher players, therefore creating "holes" in their game. We also believe that there is an importance in learning how to be the best in a group, and being a favorite and winning under these circumstances.</p>

                            <h4>Our Tournament (UTR) classes are split by the following levels:</h4>
                            <ul className="junior-skills-list">
                                <li><strong>Tournament 1 (UTR 1):</strong> UTR Singles Rating of 3-5 and/or prior Head Pro approval</li>
                                <li><strong>Tournament 2 (UTR 2):</strong> UTR Singles Rating of 5-7 and prior Head Pro approval</li>
                                <li><strong>Tournament 3 (UTR 3):</strong> UTR Singles Rating of 7+ and prior Head Pro approval</li>
                            </ul>

                            <p>To find out more information on your UTR visit <a href="https://www.myutr.com/" target="_blank" rel="noopener noreferrer">https://www.myutr.com/</a></p>

                            <div className="video-container mt-4">
                                <iframe src="https://www.youtube.com/embed/4nZ9fGY5V4g" title="Tournament Pathway" allowFullScreen></iframe>
                            </div>
                        </div>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <div className="page-container">
            {!hideHero && (
                <section className="hero hero-small">
                    <div className="hero-overlay" />
                    <div className="hero-content">
                        <h1 className="hero-title">JUNIOR CLASSES</h1>
                        <p className="hero-subtitle">CLINICS AND LESSONS FOR ALL AGES AND SKILL LEVELS</p>
                    </div>
                </section>
            )}

            <div className="junior-main-container column">
                {/* Top Tabs */}
                <div className="tabs-nav sub-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="junior-content-area-split">
                    {/* Left Content */}
                    <div className="junior-content-left">
                        {renderContent()}
                    </div>

                    {/* Right Image/Chart */}
                    <div className="junior-content-right">
                        <img src={ProgressionChart} alt="Progression Chart" className="progression-chart-img-right" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JuniorClasses;

