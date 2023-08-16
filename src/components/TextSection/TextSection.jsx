import React from 'react';
import styles from './TextSection.module.scss';

const TextSection = () => {
    return (
        <div className="container">

        <div className={styles['text-section']}>
            <h2 className={styles['text-section__header']}>De 17 Verdensmål</h2>
            <p className={styles['text-section__content']}>På FN topmødet i New York i 2015 vedtog verdens stats- og regeringsledere en hidtil uset ambitiøs og samfundsforandrende udviklingsdagsorden, også kaldt 2030 dagsordenen.
<br></br><br></br>
Frem til 2030 skal denne dagsorden sætte kurs mod en mere bæredygtig udvikling for både mennesker og planeten, vi bor på.
</p>

            <div className={styles['text-section__double']}>
                <div className={styles['text-section__block']}>
                    <h3 className={styles['text-section__header']}>Verdensmålene forpligter.</h3>
                    <p className={styles['text-section__content']}>Medlemslandende forpligter sig til helt at afskaffe fattigdom og sult i verden, sikre god uddannelse og sundhed til alle, reducere ulighed, fremme ligestilling, anstændige jobs, bæredygtig vækst og forbrug.
<br></br><br></br>
Den nye dagsorden anerkender således at social, økonomisk og miljømæssig udvikling, fred, sikkerhed og internationalt samarbejde er tæt forbundet, og at det kræver en integreret indsats at opnå holdbare udviklingsresultater.</p>
                </div>
                <div className={styles['text-section__block']}>
                    <h3 className={styles['text-section__header']}>Verdensmålene gælder alle.</h3>
                    <p className={styles['text-section__content']}>Målene gælder alle lande - både rige og fattige - dvs. de er universelle.<br></br><br></br>

Udfordringer som social, økonomisk  marginalisering, stigende ulighed, fødevareusikkerhed,  ulig adgang til grundlæggende naturressourcer,og har regionale og globale konsekvenser.<br></br><br></br>

Det er derfor afgørende at alle lande leverer og løfter opgaven i fællesskab.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TextSection;
