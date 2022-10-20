import styles from '../styles/contact.module.css';
import Circle from '../components/Circle';

const Contact = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundColor="green" left="-40vh" top="-20vh"/>
        <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh"/>
        <h2 className={styles.title}>GET IN TOUCH</h2>
      <form className={styles.form}>
        <input className={styles.inputS} placeholder="Username"/>
        <input className={styles.inputS} placeholder="Phone"/>
        <input className={styles.inputL} placeholder="Emial"/>
        <input className={styles.inputL} placeholder="Subject"/>
        <textarea className={styles.textarea} placeholder="message" row={6}></textarea>
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact