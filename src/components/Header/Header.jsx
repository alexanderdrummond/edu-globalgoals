import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className="container">
            <header className={styles.header}>
                <img src="ColorWheel.png" alt="Logo" className={styles.header__logo}/>
                <div className={styles.header__content}>
                    <div className={styles.titles}>
                        <h1 className={styles.header__title}>THE GLOBAL GOALS</h1>
                        <h2 className={styles.header__subtitle}>For sustainable Development</h2>
                    </div>
                    <nav className={styles.header__nav}>
                        <Link to="/text" className={styles.header__nav__link}>VERDENSMÅLENE</Link>
                        <Link to="/gallery" className={styles.header__nav__link}>DELMÅLENE</Link>
                        <Link to="/challenge" className={styles.header__nav__link}>UDFORDRINGER</Link>
                        <Link to="/contact" className={styles.header__nav__link}>KONTAKT</Link>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
