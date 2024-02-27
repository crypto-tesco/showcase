"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [clicks, setClicks] = useState<number>(0);

  function isPrime(num: number): boolean {
  // Handle invalid input (non-positive numbers)
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
  }

  useEffect(() => {
    if(clicks > 0) {
      if(isPrime(clicks)) {
        console.error(`The prime ${clicks} has been clicked!`)
      } else {
        console.log(`Clicked the number: ${clicks}!`)
      }
    }
  }, [clicks])

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          Heroku Logplex Demo
        </div>
        <div className={styles.description}>
          This is an example app to showcase the awesomeness of Heroku Logplex.
        </div>
        <div className={styles.description}>
          Hit the button to count and see the magic of logplex unfold!
        </div>
        <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => setClicks((prev) => prev+1)}>
          <div className={styles.buttonText}>
          Click Me!
          </div>
        </button>
        <div className={styles.description}>
          The button has been clicked: {clicks} times.
        </div>
        </div>
      </div>
    </main>
  );
}
