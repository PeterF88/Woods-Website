import React from 'react';
import './CommunityAccess.css';
import courtMap from '../assets/community_access_map.png';

const CommunityAccess = () => {
    return (
        <div className="community-access-content">
            <h2 className="community-access-title">Community Access</h2>
            <div className="community-access-text">
                <p>
                    Woods Park is home to 12 outdoor tennis courts and 6 indoor courts. Friends of Woods Tennis (FOWT)
                    will expand its long-standing neighborhood program and open it to the entire community. This expanded
                    program will offer the general public the opportunity to play on any of the 12 outdoor courts that are
                    available (i.e., not programmed), free of charge. Free balls and rackets will continue to be on loan
                    for use upon request. The bank of three courts identified as courts 1, 2 and 3 in the image below
                    will generally remain unlocked during Woods Tennis Center operating hours.
                </p>
            </div>
            <div className="community-access-map">
                <img src={courtMap} alt="Aerial map of Woods Tennis Center courts" />
            </div>
        </div>
    );
};

export default CommunityAccess;
