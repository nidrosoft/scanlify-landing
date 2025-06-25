import styles from "./Bento54.module.sass";
import Image from "@/components/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/images/bento-54-main.svg"
                width={368}
                height={440}
                alt=""
            />
        </div>
        <div className={styles.piano}>
            <div className={styles.inner}></div>
            <div className={styles.keys}>
                <Image
                    src="/images/bento-54-keys.svg"
                    width={226}
                    height={97}
                    alt=""
                />
            </div>
            <div className={styles.foot}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.star}>
                    <Image
                        src="/images/bento-54-star.svg"
                        width={16}
                        height={16}
                        alt=""
                    />
                </div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
        </div>
        <div className={styles.numbers}>
            <span>
                01000010 01100101 01101110 01110100 01101111 00100000 01000100
                01100101 01110011 01101001 01100111 01101110 <br></br>
                <br></br>00100000 01010011 01111001 01110011 01110100 01100101
                01101101 00111010 00100000 01000011 01100001 01110010 01100100
                01110011
            </span>
        </div>
    </div>
);

export default Bento;
