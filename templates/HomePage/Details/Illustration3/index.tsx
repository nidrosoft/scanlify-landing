import Tasks from "@/components/Tasks";
import BentoFeature3 from "../../../../Bento/components/BentoFeature3";
import styles from "./Illustration3.module.sass";

import { tasks } from "@/mocks/tasks";

type Illustration3Props = {};

const Illustration3 = ({}: Illustration3Props) => (
    <div className={styles.illustration}>
        <Tasks
            className={styles.tasks}
            classFoot={styles.foot}
            classTooltip={styles.tooltip}
            titleTooltip="Moyo Shiro"
            BentoComponent={BentoFeature3}
            animation
        />
    </div>
);

export default Illustration3;
