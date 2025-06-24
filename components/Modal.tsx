import React from "react";
import cn from "classnames";
import { modalCloseClass } from "@/components/Button";
import styles from "./Modal.module.sass";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

const Modal = ({ open, onClose, children, className }: ModalProps) => {
    if (!open) return null;
    return (
        <div className={cn(styles.overlay, { [styles.open]: open })}>
            <div className={cn(styles.modal, className)}>
                <button className={modalCloseClass} onClick={onClose} aria-label="Close modal">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal; 