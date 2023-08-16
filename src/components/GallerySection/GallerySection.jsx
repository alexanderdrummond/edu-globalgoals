import React from 'react';
import styles from './GallerySection.module.scss';

const GallerySection = () => {
    return (
        <div className="container">
        <section className={styles['gallery-section']}>
            <h2 className={styles['gallery-section__header']}>DELMÅLENE</h2>
            <p className={styles['gallery-section__content']}>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.</p>
            <h4 className={styles['gallery-section__small-title']}>Se eksempler på enkelte delmål her:</h4>
            <div className={styles['gallery-section__gallery']}>
                
                    <img src="Goal-No-Poverty.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-No-Hunger.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Good-Health.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Good-Education.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Gender-Equality.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Clean-Water.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Clean-Energy.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Decent-Work.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Industry.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Inequalities.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Sustainable-Cities.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Responsible-Consumption.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Climate-Action.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Life-Water.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Life-Land.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Institutions.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Goal-Partnership.png"   
                    className={styles['gallery-section__image']}
                    />
                    <img src="Global-Goals.png"   
                    className={styles['gallery-section__image']}
                    />

               
            </div>
        </section>
        </div>
    );
};

export default GallerySection;
