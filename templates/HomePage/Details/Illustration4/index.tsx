import Tasks from "@/components/Tasks";
import BentoFeature4 from "../../../../Bento/components/BentoFeature4";
import styles from "./Illustration4.module.sass";

type Illustration4Props = {};

const Illustration4 = ({}: Illustration4Props) => (
    <div className={styles.illustration}>
        <Tasks
            className={styles.tasks}
            classFoot={styles.foot}
            classTooltip={styles.tooltip}
            titleTooltip="Moyo Shiro"
            BentoComponent={BentoFeature4}
            animation
        />
    </div>
);

export default Illustration4; 