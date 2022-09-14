import React from 'react'
import styles from './Footer.module.css'
import drivel from '../../../src/Images/drivel.png';
const Footer = () => {
  return (
    <div>
    <div className={styles.footer}>
        <div className={styles.container}>
          <img className={styles.img} src={drivel}  alt=" " style={{border : "50%"}} height="10%"/>
      <button className={styles.btn}>Share a Car</button>
        </div>
    </div>
    </div>
  )
}

export default Footer