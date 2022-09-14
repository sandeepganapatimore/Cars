import React from 'react'
import styles from './Driver.module.css'
import Drive from '../../Images/Drive.jpg'

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
          <img className={styles.cars} src={Drive} alt="/"/>
        </div>
        <h1>Find your perfect car <span>to try before you buy</span></h1>
       <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver's seat</p>
        
        <button>Browser Cars</button>
        
    </div>
  )
}

export default Driver