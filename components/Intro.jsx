/* eslint-disable @next/next/no-img-element */
import style from '../styles/intro.module.css';
import Circle from './Circle';

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brand}>GSHON</span> WEB SOLUTIONS
        </h1>
        <p className={style.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
        <img
          className={style.intro_img}
          src="https://assets.imgix.net/setup/serving-swimmer.jpg?q=60&auto=format%2Cenhance&crop=entropy&fit=crop&h=300&w=900"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
