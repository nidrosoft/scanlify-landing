import styles from "./Bento53.module.sass";
import Image from "@/components/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <Image src="/images/bento-53.svg" width={368} height={536} alt="" />
    </div>
);

export default Bento;
