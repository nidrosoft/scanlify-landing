import cn from "classnames";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import CompletedTasks from "@/components/CompletedTasks";
import styles from "./Tasks.module.sass";
import Bento32 from "../../Bento/components/Bento32";

type TasksProps = {
    className?: string;
    classTooltip?: string;
    titleTooltip?: string;
    classFoot?: string;
    items?: {
        id: string;
        title: string;
        isActions: boolean;
        isHover: boolean;
        isSelected: boolean;
    }[];
    animation?: boolean;
    completed?: boolean;
    BentoComponent?: React.ComponentType;
};

const Tasks = ({
    className,
    classTooltip,
    titleTooltip,
    classFoot,
    items,
    animation,
    completed,
    BentoComponent = Bento32,
}: TasksProps) => (
    <div
        className={cn(className, styles.tasks, {
            [styles.animation]: animation,
            [styles.completed]: completed,
        })}
    >
        <div className={styles.inner}>
            <div className={styles.head}>
                <div className={styles.back}>
                    <div className={styles.icon}>
                        <Icon name="arrow-left" />
                    </div>
                    {completed ? "All Set!" : "Scanning..."}
                </div>
                <div className={styles.icon}>
                    <Icon name="plus" />
                </div>
            </div>
            {!completed ? (
                <div className={styles.body}>
                    <BentoComponent />
                </div>
            ) : (
                <div className={styles.wrap}>
                    <CompletedTasks
                        classPreview={styles.previewCompletedTasks}
                    />
                </div>
            )}
            <div className={cn(classFoot, styles.foot)}>
                <div className={styles.progress}>
                    <div className={styles.circle}>
                        <Image
                            className={styles.image}
                            src={
                                completed
                                    ? "/images/check-circle.svg"
                                    : "/images/circle-progress.svg"
                            }
                            width={32}
                            height={32}
                            alt=""
                        />
                    </div>
                    <div className={styles.result}>
                        Cards Scanned<span>{completed ? "8/8" : "62/100"}</span>
                    </div>
                </div>
                <div className={styles.icon}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
);

export default Tasks;
