import { useState } from "react";
import cn from "classnames";
import Label from "@/components/Label";
import Item from "./Item";
import Rating from "./Rating";
import styles from "./Pricing.module.sass";

import { pricing } from "@/mocks/pricing";

type PricingProps = {
    onGetStarted?: () => void;
};

const Pricing = ({ onGetStarted }: PricingProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabs = ["Billed annually", "Billed monthly"];

    return (
        <div className={cn("section", styles.pricing)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <Label title="pricing" />
                    <div className={cn("h2", styles.title)}>
                        Choose your growth plan
                    </div>
                    <div className={styles.info}>
                        Every connection starts with a scan. Pick the Scanlify plan that fits your business and unlock powerful contact management, campaigns, and growth tools!
                    </div>
                    <div
                        className={cn(styles.tabs, {
                            [styles.active]: activeIndex === 1,
                        })}
                    >
                        {tabs.map((tab, index) => (
                            <button
                                className={cn(styles.tab, {
                                    [styles.active]: activeIndex === index,
                                })}
                                key={index}
                                onClick={() => setActiveIndex(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.list}>
                    {pricing.map((item, index) => (
                        <Item
                            item={item}
                            key={item.id}
                            index={index}
                            activeIndex={activeIndex}
                            onGetStarted={onGetStarted}
                        />
                    ))}
                </div>
                <div className={styles.foot}>
                    <Rating />
                </div>
            </div>
        </div>
    );
};

export default Pricing;
