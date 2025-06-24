import cn from "classnames";
import styles from "./Button.module.sass";

type ButtonProps = {
    className?: string;
    title: string;
    href?: any;
    onClick?: () => void;
    props?: any;
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
};

const Button = ({ className, title, href, onClick, type, style, ...props }: ButtonProps) => {
    const CreatedTag = href ? "a" : "button";

    return (
        <CreatedTag
            className={cn(className, styles.button)}
            href={href}
            rel={href ? "noopener noreferrer" : undefined}
            onClick={onClick}
            type={!href ? type || "button" : undefined}
            style={style}
            {...props}
        >
            <span className={styles.title}>{title}</span>
            <span className={styles.circle}></span>
        </CreatedTag>
    );
};

export default Button;

export const modalButtonClass = styles.modalButton;
export const modalCloseClass = styles.modalClose;
