import React from 'react';
import './AdultClasses.css';
import '../index.css';

const AdultClasses = () => {
    return (
        <div className="adult-classes-container">
            <div className="adult-classes-intro">
                <p>Woods Tennis Center offers a comprehensive range of adult tennis classes for all skill levels, from beginners to advanced league players. Our goal is to provide a fun, engaging, and improving environment for everyone.</p>
            </div>

            {/* Adult Classes Section */}
            <div className="adult-class-grid">
                <div className="adult-class-card">
                    <h3 className="adult-class-title">Adult Beginner</h3>
                    <p className="adult-class-description">
                        A class for those brand new to tennis. Learn the basic strokes, skills and scoring, as well as an introduction to rallying. The aim is to have players feel comfortable in the basic skills needed to have a casual hit with friends or family. These players have had limited exposure to tennis, but are ready to give it a try. Modified balls may be used to help speed the process up a little.
                    </p>
                </div>

                <div className="adult-class-card">
                    <h3 className="adult-class-title">Adult Ready to Rally</h3>
                    <span className="adult-class-level">New Name – same great class</span>
                    <p className="adult-class-description">
                        This class was previously called our Advanced Beginner Class. These players have the skill set to be ready to get involved in rallies and all the fun that comes with them. For those who have come through the Beginner class, or know the basics, but are looking for more supervised instruction on how to make rallying work. These players will not yet be playing matches or leagues, but may have an eye in that direction.
                    </p>
                </div>

                <div className="adult-class-card">
                    <h3 className="adult-class-title">Adult Drill Level 1 (3.0 NTRP)</h3>
                    <p className="adult-class-description">
                        A drill based class for adult league players and those that are a 3.0 USTA player, or equivalent level. This class will help fine-tune specific strokes, develop better shot selection, and learn effective match strategy. This class has some instruction, but is mainly focused on exposing players to point play situations.
                    </p>
                </div>

                <div className="adult-class-card">
                    <h3 className="adult-class-title">Adult Drill Level 2 (3.5+ NTRP)</h3>
                    <p className="adult-class-description">
                        Our most advanced drill group for players who have several years of experience in competitive club or USTA leagues. Players are USTA rated 3.5 or higher. Learn to produce better spin on groundstrokes and serves, find and exploit weaknesses in opponents, and know when to play the percentages and when to go for it.
                    </p>
                </div>
            </div>

            <div className="special-offer-box">
                <p>Players in Adult Group Classes can get $5-Day-Of court time and ball machine use.</p>
            </div>

            {/* Adult League Opportunities */}
            <section className="adult-leagues-section">
                <h2 className="section-title text-center text-primary">Adult League Opportunities</h2>
                <div className="league-grid">
                    <div className="league-column">
                        <h3>Men's Doubles Leagues</h3>
                        <div className="league-item">
                            <span className="league-level">3.5 Level</span>
                            <p className="league-details">Sr Men (jfk120@mac.com): Mo, We, Fr 8 am; Sa 7:30 am**</p>
                            <p className="league-details">Woods (woodsleagues@gmail.com): Tu 8:30 pm</p>
                        </div>
                        <div className="league-item">
                            <span className="league-level">4.0 Level</span>
                            <p className="league-details">Woods (woodsleagues@gmail.com): Mo 8:30 pm*</p>
                        </div>
                    </div>

                    <div className="league-column">
                        <h3>Women's Doubles Leagues</h3>
                        <div className="league-item">
                            <span className="league-level">3.0-3.5 Level</span>
                            <p className="league-details">Williams (dtwilliams11@gmail.com): Th 7:00 pm*</p>
                            <p className="league-details">Woods (woodsleagues@gmail.com): Mo 7:00 pm*, We 9:30 am**, Th 7:00 pm*</p>
                        </div>
                        <div className="league-item">
                            <span className="league-level">4.0-4.5 Level</span>
                            <p className="league-details">Woods (woodsleagues@gmail.com): Mo, Tu 9:30 am**; We 7:00 pm*</p>
                        </div>
                    </div>
                </div>

                <div className="league-column mt-4 text-center">
                    <h3>Beginner Doubles League (Men and Women)</h3>
                    <p className="league-details">Woods (woodsleagues@gmail.com): Th 8:30 pm*</p>
                </div>

                <div className="league-notes text-center mt-6">
                    <p>*only Sep through April, no league in the summer.</p>
                    <p>**8 am in the summer.</p>
                    <p><a href="https://forms.gle/g9nNTwwAZr9Ks7V2A" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold hover:underline">Click here</a> to request more information.</p>
                </div>
            </section>

            {/* Self-Organized Tennis */}
            <section className="self-organized-section">
                <h2>Self-Organized Tennis</h2>
                <p className="mb-4">Want to meet new players? Are you ready to set up some matches on your own?</p>
                <p className="mb-4">
                    <a href="https://forms.gle/UFiuLY1awox5ZXGs6" target="_blank" rel="noopener noreferrer">Click here</a> to add your name to our list. You'll have access to their email addresses, and they'll have access to yours.
                </p>
                <p>
                    Looking for more options? Visit <a href="http://www.abtlleague.com" target="_blank" rel="noopener noreferrer">www.abtlleague.com</a> for flex league play.
                </p>
            </section>
        </div>
    );
};

export default AdultClasses;
