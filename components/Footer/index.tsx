import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import styles from "./Footer.module.sass";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
    const [email, setEmail] = useState<string>("");

    return (
        <div className={styles.footer}>
            <div className={cn("container", styles.container)}>
                <div className={styles.row}>
                    <div className={styles.line}>
                        <Link className={styles.logo} href="/">
                            <Image
                                className={styles.image}
                                src="/images/logo-without-text.svg"
                                priority={true}
                                width={64}
                                height={64}
                                alt=""
                            />
                        </Link>
                        <div className={styles.text}>
                            Scan, organize, and grow your business contacts effortlessly
                        </div>
                    </div>
                    <form
                        className={styles.form}
                        action=""
                        onSubmit={() => console.log("Submit")}
                    >
                        <Icon name="envelope" />
                        <input
                            className={styles.input}
                            type="email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            required
                        />
                        <Button className={styles.button} title="Subscribe" />
                    </form>
                </div>
                <Image
                    className={styles.textImage}
                    src="/images/footer-text.svg"
                    width={1280}
                    height={246}
                    alt=""
                />
                <div className={styles.bottomFooter}>
                    Built with <span role="img" aria-label="love">❤️</span> by <a href="https://cyriaczeh.com" target="_blank" rel="noopener noreferrer" className={styles.authorLink}>Cyriac Zeh</a> - © 2025 All Rights Reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
