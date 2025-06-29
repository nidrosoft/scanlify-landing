import Link from "next/link";
import Button from "@/components/Button";
import styles from "./not-found.module.sass";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Whoopsie Daisy! 🚀</h1>
        <p className={styles.description}>
          Looks like you've taken a wrong turn at the digital crossroads! 🌍<br />
          The page you're looking for has gone on a coffee break ☕ or decided to take an unexpected vacation 🏖️
        </p>
        <div className={styles.emojiContainer}>
          <span>🔍</span>
          <span>👀</span>
          <span>🤷‍♂️</span>
        </div>
        <div className={styles.actions}>
          <Link href="/">
            <Button
              title="Return Home"
              className={styles.button}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
