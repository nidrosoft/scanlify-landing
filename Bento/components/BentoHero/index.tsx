import styles from "./BentoHero.module.sass";

type BentoProps = {};

const BentoHero = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.image}>
            <img src="/hero.svg" width={600} height={600} alt="Hero Illustration" className={styles.image} />
        </div>
    </div>
);

export default BentoHero; 