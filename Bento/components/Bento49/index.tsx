import styles from "./Bento49.module.sass";
import Image from "@/components/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/images/bento-49-main.svg"
                width={368}
                height={550}
                alt=""
            />
        </div>
        <div className={styles.boxes}>
            <div className={styles.box}></div>
            <div className={styles.box}>
                <span></span>
            </div>
            <div className={styles.box}></div>
        </div>
    </div>
);

export default Bento;
