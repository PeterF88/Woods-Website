import React from 'react';
import './Shop.css';
import closetLogo from '../assets/community_closet_logo.png';

const Shop = () => {
    return (
        <div className="community-closet-content">
            <h2 className="community-closet-title">Community Closet</h2>
            <div className="community-closet-body">
                <div className="community-closet-logo">
                    <img src={closetLogo} alt="Give the Game Community Closet Logo" />
                </div>
                <div className="community-closet-text">
                    <p>
                        If you have any new or gently used tennis equipment, apparel, or shoes, please consider donating
                        them to our Give the Game Community Closet. Your donations will help us continue to "Take the Game
                        to the Community," ensuring those we teach across the city have all the equipment needed from head
                        to toe to learn the game!
                    </p>
                    <p>
                        Email <a href="mailto:kaitlin.roselius@gmail.com?subject=Woods Community Closet">Kaitlin</a> to learn more.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Shop;
