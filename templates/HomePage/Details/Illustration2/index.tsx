import Tasks from "@/components/Tasks";
import BentoFeature2 from "../../../../Bento/components/BentoFeature2";
import styles from "./Illustration2.module.sass";

import { tasks } from "@/mocks/tasks";

type Illustration2Props = {};

const Illustration2 = ({}: Illustration2Props) => (
    <div className={styles.illustration}>
        <Tasks
            className={styles.tasks}
            classFoot={styles.foot}
            classTooltip={styles.tooltip}
            titleTooltip="Moyo Shiro"
            BentoComponent={BentoFeature2}
            animation
        />
    </div>
);

export default Illustration2;
