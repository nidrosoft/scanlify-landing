import cn from "classnames";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import CompletedTasks from "@/components/CompletedTasks";
import styles from "./Tasks.module.sass";

type TaskItem = {
    title: string;
    description: string;
    icon: string;
    cta: string;
};

type TasksProps = {
    className?: string;
    classTooltip?: string;
    titleTooltip?: string;
    classFoot?: string;
    items?: TaskItem[];
    animation?: boolean;
    completed?: boolean;
};

const Tasks = ({
    className,
    classTooltip,
    titleTooltip,
    classFoot,
    items,
    animation,
    completed,
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
                    {completed ? "Simple list" : "Upcoming"}
                </div>
                <div className={styles.icon}>
                    <Icon name="plus" />
                </div>
            </div>
            {!completed ? (
                <div className={styles.body}>
                    {items?.map((item, idx) => (
                        <div className={styles.task} key={item.title + idx}>
                            <div className={styles.in}>
                                <div className={styles.iconTask}>
                                    <Icon name={item.icon} />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.title}>{item.title}</div>
                                    <div className={styles.description}>{item.description}</div>
                                </div>
                                <button className={styles.cta}>{item.cta}</button>
                            </div>
                        </div>
                    ))}
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
                        completed<span>{completed ? "8/8" : "1/5"}</span>
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
