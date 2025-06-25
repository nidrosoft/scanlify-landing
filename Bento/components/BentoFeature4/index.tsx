import styles from "./BentoFeature4.module.sass";
import Image from "@/components/Image";

type BentoProps = {};

const BentoFeature4 = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.image}>
            <Image src="/images/dashboard.svg" width={600} height={600} alt="Feature 4 Illustration" />
        </div>
    </div>
);

export default BentoFeature4; 