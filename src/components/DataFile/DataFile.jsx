import React, { useState } from "react";
import styles from "./DataFile.module.scss";

const DataFile = (props) => {
  const { name, role } = props.person;
  const [count, setCount] = useState(0);

  return (
    <>
      <section className={styles.content}>
        <section className={styles.dataCard}>
          <section className={styles.title}>
            <h1>{name}</h1>

            <h2>{role}</h2>
          </section>
          <div className={styles.counter}>
            <button onClick={() => setCount(count + 1)}>+</button>

            <div className={styles.count}>
              <h3>{count}</h3>
            </div>

            <button onClick={() => setCount(count - 1)}>-</button>
          </div>
        </section>
      </section>
    </>
  );
};

export default DataFile;
