import cn from "classnames";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Images from "./Images";
import styles from "./Hero.module.sass";

const Hero = () => (
    <div className={cn("section", styles.hero)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <h1 className={cn("h1", styles.title)}>
                    Your business, streamlined
                </h1>
                <div className={styles.subheading}>Scan, organize, and grow your business contacts effortlessly</div>

                <a href="https://app.scanlify.io">
                    <Button
                        className={styles.button}
                        title="Get started"
                    />
                </a>
                <div className={styles.version}>IOS App Coming Soon</div>
            </div>
            <Images />
            <div className={styles.foot}>
                <div className={styles.description}>
                    Trusted by thousands of modern businesses and creators
                </div>
                <div className={styles.avatars}>
                    {[
                        "/images/avatar-6.png",
                        "/images/avatar-5.png",
                        "/images/avatar-4.png",
                        "/images/avatar-3.png",
                        "/images/avatar-2.png",
                        "/images/avatar-1.png",
                    ].map((avatar, index) => (
                        <div className={styles.avatar} key={index}>
                            <Image
                                className={styles.image}
                                src={avatar}
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {/* <Stars /> */}
    </div>
);

export default Hero;
