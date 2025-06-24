import Image from "@/components/Image";
import styles from "./Rating.module.sass";

type RatingProps = {};

const Rating = ({}: RatingProps) => (
    <div className={styles.rating}>
        <div className={styles.stars}>
            <div className={styles.star}>
                <Image src="/images/star.svg" width={24} height={24} alt="" />
            </div>
            <div className={styles.star}>
                <Image src="/images/star.svg" width={24} height={24} alt="" />
            </div>
            <div className={styles.star}>
                <Image src="/images/star.svg" width={24} height={24} alt="" />
            </div>
            <div className={styles.star}>
                <Image src="/images/star.svg" width={24} height={24} alt="" />
            </div>
            <div className={styles.star}>
                <Image src="/images/star.svg" width={24} height={24} alt="" />
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.text}>
                Over 10k users worldwide – Best business card scanning tool 😎
            </div>
        </div>
    </div>
);

export default Rating;
