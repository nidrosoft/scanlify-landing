import Tasks from "@/components/Tasks";
import BentoFeature1 from "@/components/BentoFeature1";
import styles from "./Illustration1.module.sass";

type Illustration1Props = {};

const Illustration1 = ({}: Illustration1Props) => (
    <div className={styles.illustration}>
        <Tasks
            className={styles.tasks}
            classFoot={styles.foot}
            classTooltip={styles.tooltip}
            titleTooltip="Moyo Shiro"
            BentoComponent={BentoFeature1}
            animation
        />
    </div>
);

export default Illustration1;
