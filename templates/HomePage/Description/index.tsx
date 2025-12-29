import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import Button from "@/components/Button";
import Image from "@/components/Image";
import styles from "./Description.module.sass";

const Description = () => (
    <div className={cn("section", styles.description)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrapper}>
                <div className={styles.inner}>
                    <div className={styles.head}>
                        <div className={cn("h1", styles.title)}>
                            Where smart networking meets simplicity
                        </div>
                        <div className={styles.info}>
                            Scan, organize, and grow your business effortlessly.
                        </div>
                        <a href="https://app.scanlify.io">
                            <Button
                                className={styles.button}
                                title="Get started"
                            />
                        </a>
                        <div className={styles.version}>IOS App Coming Soon</div>
                    </div>
                    <div className={styles.preview}>
                        <Image
                            src="/images/description-pic.png"
                            width={762}
                            height={400}
                            alt=""
                        />
                        <div className={styles.stars}>
                            <Image
                                src="/images/description-stars.svg"
                                width={776}
                                height={360}
                                alt=""
                            />
                        </div>
                        <div className={styles.cursors}>
                            <Parallax
                                className={styles.cursor}
                                translateX={["-120px", "0px"]}
                                speed={5}
                            >
                                <Image
                                    src="/images/cursor.svg"
                                    width={17}
                                    height={17}
                                    alt=""
                                />
                                <div className={styles.tooltip}>Totoro</div>
                            </Parallax>
                            <Parallax
                                className={styles.cursor}
                                translateX={["90px", "0px"]}
                                speed={5}
                            >
                                <Image
                                    src="/images/cursor-1.svg"
                                    width={17}
                                    height={17}
                                    alt=""
                                />
                                <div className={styles.tooltip}>Kohaku</div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Description;
