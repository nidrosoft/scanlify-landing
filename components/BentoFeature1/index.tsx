import styles from "./BentoFeature1.module.sass";
import Image from "@/components/Image";

type BentoProps = {};

const BentoFeature1 = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.image}>
            <Image src="/images/batch.svg" width={600} height={600} alt="Feature 1 Illustration" />
        </div>
    </div>
);

export default BentoFeature1; 