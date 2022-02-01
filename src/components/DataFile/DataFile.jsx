import React, { useState } from "react";
import styles from "./DataFile.module.scss";

const DataFile = (props) => {
  const { name, role } = props.person;
  const [count, setCount] = useState(0);

  return (
    <>
   

    <section className={styles.content}>
      
      <h2>{name}</h2>

      <h2>{role}</h2>

      <div className={styles.counter}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </section>
    </>
  );
};

export default DataFile;
