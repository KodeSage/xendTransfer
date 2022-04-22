import React from 'react';
// import Image from 'next/image';
import styles from "./splashscreen.module.css";

export default function Splashscreen() {
  return (
      <div className={styles.splashscreen}>
          <img src="/xendO.png" alt="xendlogo" width={ 50 } height={ 50 } />
    </div>
  )
}
