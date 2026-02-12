import React from 'react';
import '../index.css';
import './JuniorTournaments.css';
import tournamentImg from '../assets/tournament-players.png';

const JuniorTournaments: React.FC = () => {
    return (
        <div className="page-container">
            {/* Gray Banner */}
            <section className="jt-banner">
                <h1 className="jt-banner-title">Junior Tournaments</h1>
            </section>

            {/* Main Content */}
            <section className="jt-content-section">
                <div className="jt-content-container">
                    <h2 className="jt-section-title">USTA TOURNAMENTS AT WOODS TENNIS CENTER</h2>

                    <div className="jt-image-wrapper">
                        <img
                            src={tournamentImg}
                            alt="Junior tennis tournament players with trophies"
                            className="jt-section-image"
                        />
                    </div>

                    <div className="jt-text-block">
                        <p>
                            Woods Tennis Center has hosted many USTA district,
                            sectional, national and professional tournaments. In
                            addition, we have various adult and junior socials such as
                            Team Challengers, Bashers and Match Days.
                        </p>
                        <p>
                            <a
                                href="https://playtennis.usta.com/woodstenniscenter/Tournaments"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="jt-click-link"
                            >
                                Click here
                            </a>{' '}
                            to view and register for our tournaments taking
                            place at Woods Tennis Center.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JuniorTournaments;
