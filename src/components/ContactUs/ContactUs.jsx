import React from 'react';
import styles from './ContactUs.module.scss';

const ContactUs = () => {
    return (
        <div className="container">
        <section className={styles['contact-us']}>
            <h2 className={styles['contact-us__title']}>Kontakt os</h2>
            <p className={styles['contact-us__content']}>Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen herunder:</p>

            <div className={styles['contact-us__wrapper']}>
                <img src="UN-Logo-Large.png" alt="Description for Image" className={styles['contact-us__image']} />

                <div className={styles['contact-us__form-container']}>
                    <form className={styles['contact-us__form']}>
                        <input type="text" placeholder="Navn" className={styles['contact-us__input']} />
                        <input type="email" placeholder="Email" className={styles['contact-us__input']} />
                        <input type="text" placeholder="Telefon" className={styles['contact-us__input']} />
                        <textarea placeholder="Din besked" className={styles['contact-us__textarea']}></textarea>
                        <div className={styles['contact-us__buttons']}>
                            <button type="submit" className={styles['contact-us__button']}>Send</button>
                            <button type="reset" className={styles['contact-us__button']}>Fortryd</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </div>
    );
};

export default ContactUs;
