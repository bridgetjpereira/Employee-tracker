import React, { useState } from "react";
import styles from "./App.module.scss";
import DataFile from "./components/DataFile";
import team from "./Data/team";


const App = () => {
  const getDataFileJsx = (person) => (
    <DataFile person={person} key={person.id} />
  );

  return (
    <>

<nav className={styles.nav}>
      <h1>Ticket Tracker</h1>
   
    </nav>
      <section className={styles.content}>{team.map(getDataFileJsx)}</section>
    </>
  );
};

export default App;
