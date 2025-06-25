import cn from "classnames";
import Image from "@/components/Image";
import Item from "./Item";
import Illustration1 from "./Illustration1";
import Illustration2 from "./Illustration2";
import Illustration3 from "./Illustration3";
import Illustration4 from "./Illustration4";
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
                    "Finally, a business card and CRM app that just works!"
                </div>
            </div>
            <div className="">
                <Item
                    className={styles.item}
                    title="Batch scanning cards"
                    content={
                        <ul style={{margin: 0, paddingLeft: 0, listStyle: 'none'}}>
                            <li style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Scan up to 100 business cards
                            </li>
                            <li style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Enables drag-and-drop functionality
                            </li>
                            <li style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Automatically organizes contacts
                            </li>
                        </ul>
                    }
                    icon="/images/plus.svg"
                    gradient="/images/gradient-1.png"
                >
                    <Illustration1 />
                </Item>
                <Item
                    className={styles.item}
                    classOvarlay={styles.overlay}
                    title="Email campaign management"
                    content={
                        <ul style={{margin: 0, paddingLeft: 0, listStyle: 'none'}}>
                            <li style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Create personalized email campaigns
                            </li>
                            <li style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Track campaign performance
                            </li>
                            <li style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Export your contacts to CSV
                            </li>
                        </ul>
                    }
                    icon="/images/laptop.svg"
                    gradient="/images/gradient-3.png"
                >
                    <Illustration3 />
                </Item>
                <Item
                    className={styles.item}
                    classOvarlay={styles.overlay}
                    title="Smart dynamic contact table"
                    content={
                        <ul style={{margin: 0, paddingLeft: 0, listStyle: 'none'}}>
                            <li style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Real-time contact management
                            </li>
                            <li style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Advanced filtering and editing
                            </li>
                            <li style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Spreadsheet-like interface
                            </li>
                        </ul>
                    }
                    icon="/images/numbers.svg"
                    gradient="/images/gradient-2.png"
                >
                    <Illustration2 />
                </Item>
                <Item
                    className={styles.item}
                    classOvarlay={styles.overlay}
                    title="Dashboard analytics"
                    content={
                        <ul style={{margin: 0, paddingLeft: 0, listStyle: 'none'}}>
                            <li style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Visualize your business activity
                            </li>
                            <li style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Monitor campaign performance
                            </li>
                            <li style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{color: '#4CAF50', marginRight: 8}}>✓</span>
                                Gain actionable insights & reports
                            </li>
                        </ul>
                    }
                    icon="/images/numbers.svg"
                    gradient="/images/gradient-2.png"
                >
                    <Illustration4 />
                </Item>
            </div>
        </div>
    </div>
);

export default Details;
