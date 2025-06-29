"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Toast.module.sass";
import { FiX } from "react-icons/fi";

interface ToastProps {
  message: string;
  type?: "info" | "success" | "warning" | "error";
  onDismiss?: () => void;
  duration?: number;
}

export const Toast = ({
  message,
  type = "info",
  onDismiss,
  duration = 5000,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      setTimeout(onDismiss, 300); // Wait for fade-out animation
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(styles.toast, styles[`toast--${type}`], {
        [styles[`toast--visible`]]: isVisible,
      })}
      role="alert"
    >
      <div className={styles.toast__content}>
        <p className={styles.toast__message}>{message}</p>
        <button
          className={styles.toast__close}
          onClick={handleDismiss}
          aria-label="Dismiss message"
        >
          <FiX size={18} />
        </button>
      </div>
    </div>
  );
};

export const ToastContainer = ({
  children,
  position = "top-right",
}: {
  children: React.ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}) => {
  return (
    <div className={cn(styles.toastContainer, styles[`toastContainer--${position}`])}>
      {children}
    </div>
  );
};

export default Toast;
