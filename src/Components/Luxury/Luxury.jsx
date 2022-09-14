import React from "react";
import styles from "./Luxuy.module.css";
const Luxury = () => {
  return (
    <>
      <div className={styles.luxury}>
        <div className={styles.heading}>
          <h2>Luxury Selection</h2>
          <div className={styles.text_bg}>
            <p>
              <span>Select from the top Luxury vehicles to roll in styles</span>
            </p>
          </div>
        </div>

        <div className={styles.container}>
          
              <div className={styles.card}>
                  <img
              src="https://images.unsplash.com/photo-1632548260498-b7246fa466ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJvbGxzJTIwcm95Y2V8ZW58MHx8MHx8
  &auto=format&fit=crop&w=500&q=60 "
              alt="/"
            />
            <div className={styles.content}>
              <h3>Rolls Royce</h3>
            </div>
          </div>

          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1559385072-5adb2c4fc83f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwY2Fyc3xlbnwwfHwwfHw%3D
  &auto=format&fit=crop&w=600&q=60 "
              alt=" "
            />
              <div className={styles.content}>
              <h3>Porsche</h3>
            </div>
          </div>

          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1617431989418-69f8130734a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bHV4dXJ5JTIwY2Fyc3xlbnwwfHwwfHw%3D
  &auto=format&fit=crop&w=600&q=60 "
              alt=" "
            />
              <div className={styles.content}>
              <h3>Ferrari</h3>
            </div>
          </div>

          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1570374910698-6db3d787e6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGx1eHVyeSUyMGNhcnN8ZW58MHx8MHx8
  &auto=format&fit=crop&w=600&q=60 "
              alt=" "
            />
              <div className={styles.content}>
              <h3>Lamborgini</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Luxury;
