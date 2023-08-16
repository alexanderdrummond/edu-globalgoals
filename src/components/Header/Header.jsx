import React from 'react';
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
                        <a href="#" className={styles.header__nav__link}>VERDENSMÅLENE</a>
                        <a href="#" className={styles.header__nav__link}>DELMÅLENE</a>
                        <a href="#" className={styles.header__nav__link}>UDFORDRINGER</a>
                        <a href="#" className={styles.header__nav__link}>KONTAKT</a>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
