import React from 'react';
import styles from './ChallengeSection.module.scss';

const ChallengeSection = () => {
    return (
        <div className="container">
        <section className={styles['challenge']}>
            <h2 className={styles['challenge__header']}>UDFORDRINGER</h2>
            <p className={styles['challenge__content']}>Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har forpligtiget sig til.
</p>

            <div className={styles['challenge__block']}>
                <div className={styles['challenge__text']}>
                    <h3 className={styles['challenge__subheader']}>Vækst vs. bæredygtighed.</h3>
                    <p>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.

Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.

De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.</p>
                </div>
                <img src="Image-Sustainability.jpg" alt="Description for Image 1" className={styles['challenge__image']} />
            </div>

            <div className={styles['challenge__block']}>
                <div className={styles['challenge__text']}>
                    <h3 className={styles['challenge__subheader']}>Leave no-one behind.</h3>
                    <p>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.

Arbejdet med verdensmålene skal begynde med, at de
fattigste og mest marginaliserede adresseres først.

Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.

Med andre ord: “Leave No-One behind”.</p>
                </div>
                <img src="Image-Leave-No-One.jpg" alt="Description for Image 2" className={styles['challenge__image']} />
            </div>

            <div className={styles['challenge__block']}>
                <div className={styles['challenge__text']}>
                    <h3 className={styles['challenge__subheader']}>Fattigdom og sult.</h3>
                    <p>Det første af FN’s verdensmål handler om at afskaffe verdens fattigdom inden 2030.

Det handler især om at give muligheder for mennesker i verdens fattigste lande. Verdensbanken definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs. cirka 13 kroner.

En stor udfordring, men vi er allerede godt på vej.</p>
                </div>
                <img src="Image-Hunger.jpg" alt="Description for Image 3" className={styles['challenge__image']} />
            </div>
        </section>
        </div>
    );
};

export default ChallengeSection;
