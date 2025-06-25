import styles from "./BentoFeature2.module.sass";
import Image from "@/components/Image";

type BentoProps = {};

const BentoFeature2 = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.image}>
            <Image src="/images/table.svg" width={600} height={600} alt="Feature 2 Illustration" />
        </div>
    </div>
);

export default BentoFeature2; 