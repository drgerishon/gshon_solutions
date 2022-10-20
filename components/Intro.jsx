/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/intro.module.css';
import Image from 'next/image';
import Circle from './Circle';

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>GSHON</span> Web Solutions
        </h1>
        <p className={styles.desc}>
          We provide all your web services in a professional mannner
        </p>
        <button className={styles.button}>Discover</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/white-male.jpg"
          alt=""
          height="100px"
          width="100px"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
    </div>
  );
};

export default Intro;
