import cn from "classnames";
import Label from "@/components/Label";
import CompletedTasks from "@/components/CompletedTasks";
import Bento from "./Bento";
import Bento13 from "./Bento13";
import Bento11 from "./Bento11";
import styles from "./Work.module.sass";

type WorkProps = {};

const Work = ({}: WorkProps) => (
    <div className={styles.work}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <Label title="how it work" />
                <h2 className={cn("h2", styles.title)}>
                    Three simple steps to smarter networking
                </h2>
            </div>
            <div className={styles.body}>
                <div className={styles.boxes}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
                <div className={styles.list}>
                    <Bento
                        title="Get started with Scanlify"
                        content="Scan, organize, and grow your business contacts effortlessly"
                        number={1}
                    >
                        <Bento13 />
                    </Bento>
                    <Bento
                        title="Scan your first business card"
                        content="Tap the scan button and instantly capture contact details"
                        number={2}
                    >
                        <Bento11 />
                    </Bento>
                    <Bento
                        title="Manage all your contacts"
                        content="Track, engage, and convert leads all in one place with our CRM"
                        number={3}
                    >
                        <CompletedTasks />
                    </Bento>
                </div>
            </div>
        </div>
    </div>
);

export default Work;
