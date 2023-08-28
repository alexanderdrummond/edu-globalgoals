import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className="container">
        <footer className={styles.footer}>
            <div className={styles.footer__column}>
                <h2 className={styles.footer__column__title}>Eksterne Links:</h2>
                <a href="#" className={styles.footer__column__link}>Link 1</a>
                <a href="#" className={styles.footer__column__link}>Link 2</a>
                <a href="#" className={styles.footer__column__link}>Link 3</a>
                <a href="#" className={styles.footer__column__link}>Link 4</a>
                <a href="#" className={styles.footer__column__link}>Link 5</a>
                <a href="#" className={styles.footer__column__link}>Link 6</a>
            </div>

            <div className={styles.footer__column}>
                <h2 className={styles.footer__column__title}>Ressourcer:</h2>
                <a href="#" className={styles.footer__column__link}>PDF 1</a>
                <a href="#" className={styles.footer__column__link}>PDF 2</a>
            </div>

            <div className={styles.footer__logo}>
                <img src="Partner-UNDP-Full.png" alt="Logo" className={styles.footer__logo__image} />
            </div>
        </footer>
        </div>
    );
};

export default Footer;
