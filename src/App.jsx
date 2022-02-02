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
        <div className={styles.title}>
          <h1>Ticket Tracker</h1>
        </div>
      </nav>
      <section className={styles.content}>{team.map(getDataFileJsx)}</section>
    </>
  );
};

export default App;
