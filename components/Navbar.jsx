import React, { useState } from 'react'
import styles from "../styles/navbar.module.css"
import Link from "next/link"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <Link href="/">GSHON WEB SOLUTION</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/Contact">CONTACT</Link>
        </li>
      </ul>
      <div className={styles.humburger} onClick={() =>setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul onClick={() =>setOpen(false)} className={styles.menu} style={{right: open ? "0px" : "-50vw"}}>
        <li className={styles.menuItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/Contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar