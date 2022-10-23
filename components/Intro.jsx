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
            <img className={styles.intro_img} src="https://assets.imgix.net/setup/serving-swimmer.jpg?q=60&auto=format%2Cenhance&crop=entropy&fit=crop&h=300&w=900" alt=""/>
      </div>
    </div>
  );
};

export default Intro;
