import styles from "./BentoFeature3.module.sass";
import Image from "@/components/Image";

type BentoProps = {};

const BentoFeature3 = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.image}>
            <Image src="/images/emails.svg" width={600} height={600} alt="Feature 3 Illustration" />
        </div>
    </div>
);

export default BentoFeature3; 