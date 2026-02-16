import React from 'react';
import './PrivateLessons.css';

interface PrivateLessonsProps {
    hideHero?: boolean;
}

const PrivateLessons: React.FC<PrivateLessonsProps> = ({ hideHero }) => {
    return (
        <div className="private-lessons-page-new">
            {!hideHero && (
                <section className="hero">
                    <div
                        className="hero-background"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=800&fit=crop)' }}
                    />
                    <div className="hero-overlay" />
                    <div className="hero-content">
                        <h1 className="hero-title">Private Lessons</h1>
                    </div>
                </section>
            )}

            <div className="pl-content-container">
                <div className="pl-image-container">
                    <img
                        src="https://static.wixstatic.com/media/11062b_4d6455c7d7094955a1ebca5b0d537b80~mv2.jpg/v1/fill/w_738,h_1234,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_4d6455c7d7094955a1ebca5b0d537b80~mv2.jpg"
                        alt="Tennis racket on court"
                        className="pl-main-image"
                    />
                </div>

                <div className="pl-text-content">
                    <p className="pl-intro">
                        Private lessons can be a great way to brush up on skills that players are struggling with,
                        or to build skills for the future. All of our pros are able to give private lessons and
                        it is simply a matter of finding times that work in everyone's schedule to get something booked.
                    </p>

                    <p className="pl-notice">
                        <strong>
                            PLEASE NOTE: AT THE MOMENT, WE DO HAVE A LONG WAITING LIST ON PRIVATE LESSONS -
                            ESPECIALLY DURING REGULAR OUTSIDE-OF-SCHOOL HOURS. REST ASSURED, IF YOU'VE SUBMITTED
                            A REQUEST, WE'VE RECEIVED IT, BUT IT WILL BE A WHILE BEFORE WE'RE ABLE TO ACCOMMODATE YOUR REQUEST.
                        </strong>
                    </p>

                    <p>
                        Please complete the <a href="https://docs.google.com/forms/d/e/1FAIpQLScIxikDazdRDyRV0c03Hi5UyZRCuhCdWmnoaHrGHLlSofl0Hw/viewform?usp=sharing" target="_blank" rel="noopener noreferrer">Private Lesson Request Form</a> to be added to the wait list.
                    </p>

                    <div className="pl-contact-info">
                        <h3>Woods Tennis Center</h3>
                        <p>Email: <a href="mailto:woodsleagues@gmail.com">woodsleagues@gmail.com</a></p>
                        <p>Phone: <a href="tel:4024417095">(402) 441-7095</a></p>
                        <p>Address: 401 S 33rd St, Lincoln, NE 68510, USA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateLessons;
