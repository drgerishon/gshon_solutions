import React from 'react'
import styles from '../styles/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Web Solutions.</h1>
        <h1 className={styles.linkTitle}>

        <span className={styles.linkText}>WORK WITH US</span>
          <Link href="/Contact" passHref>
          <Image src="/img/link.png" alt="" height="40px" width="40" />
          </Link>
         </h1>
         </div>
         <div className={styles.cardS}>
           <div className={styles.cardItem}>
              Tom Mboya Street Nrb <br/> Kenya
           </div>
           <div className={styles.cardItem}>
              CONTACT@ GsonWemSolutions <br/> 0708953968
           </div>
         </div>
         <div className={styles.cardS}>
          <div className={styles.cardItem}>
            FOLLOW US:
            <br />
             __FB __IN __BE __TW
          </div>
          <div className={styles.cardItem}>
            @ 2022 GshonWebSolutions,
            <br />
            All Rights Reserved
          </div>
         </div>
     </div>
  )
}

export default Footer