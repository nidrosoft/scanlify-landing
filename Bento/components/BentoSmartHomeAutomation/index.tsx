import styles from "./BentoSmartHomeAutomation.module.sass";
import Image from "@/components/Image";

type BentoProps = {};

const BentoSmartHomeAutomation = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.image}>
            <Image src="/images/smart-home-automation.svg" width={368} height={368} alt="Smart Home Automation" />
        </div>
    </div>
);

export default BentoSmartHomeAutomation; 