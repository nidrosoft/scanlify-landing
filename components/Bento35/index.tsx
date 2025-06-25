import styles from "./Bento35.module.sass";
import Image from "@/components/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.image}>
            <Image src="/images/bento-35.svg" width={368} height={552} alt="" />
        </div>
        <div className={styles.dot}>
            <Image
                src="/images/bento-35-toggle-indicator.svg"
                width={16}
                height={16}
                alt=""
            />
        </div>
    </div>
);

export default Bento;
