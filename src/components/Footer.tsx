import { Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer glow-border-bottom">
            <div className="container footer-container">
                <div className="footer-social">
                    <a href="#" className="footer-icon"><Facebook size={24} /></a>
                    <a href="#" className="footer-icon"><Instagram size={24} /></a>
                    <a href="#" className="footer-icon"><Twitter size={24} /></a>
                </div>

                <div className="footer-info">
                    <p>401 S 33rd St, Lincoln, NE 68510 | (402) 441-7095</p>
                </div>

                <div className="footer-copyright">
                    <p>Copyright © {new Date().getFullYear()} Woods Tennis Center - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
