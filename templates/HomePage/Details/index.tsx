import cn from "classnames";
import Image from "@/components/Image";
import Item from "./Item";
import Illustration1 from "./Illustration1";
import Illustration2 from "./Illustration2";
import Illustration3 from "./Illustration3";
import styles from "./Details.module.sass";

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <div className={cn("section", styles.details)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <div className={styles.check}>
                    <Image
                        className={styles.image}
                        src="/images/details-check.svg"
                        width={368}
                        height={727}
                        alt=""
                    />
                    <div className={styles.circle}>
                        <div className={styles.dot}></div>
                    </div>
                </div>
                <div className={cn("h2", styles.title)}>
                    “Finally, a business card and CRM app that just works!”
                </div>
            </div>
            <div className="">
                <Item
                    className={styles.item}
                    title="Lightning fast creation"
                    content="Scan new business cards and add contacts in seconds with our streamlined interface"
                    icon="/images/plus.svg"
                    gradient="/images/gradient-1.png"
                >
                    <Illustration1 />
                </Item>
                <Item
                    className={styles.item}
                    classOvarlay={styles.overlay}
                    title="Intuitive organization"
                    content="Drag, drop, and organize contacts and campaigns effortlessly to keep your network perfectly managed"
                    icon="/images/numbers.svg"
                    gradient="/images/gradient-2.png"
                >
                    <Illustration2 />
                </Item>
                <Item
                    className={styles.item}
                    classOvarlay={styles.overlay}
                    title="Cross-device sync"
                    content="Access your contacts anywhere, anytime - seamlessly synced across all your devices"
                    icon="/images/laptop.svg"
                    gradient="/images/gradient-3.png"
                >
                    <Illustration3 />
                </Item>
            </div>
        </div>
    </div>
);

export default Details;
