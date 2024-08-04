import logo from './logo.svg';
import './App.module.scss';
import Header from "./components/Header/Header";
import styles from './App.module.scss'
import Main from "./components/Main/Main";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
        <div className={styles.content}>
            <Main/>
        </div>
    </div>
  );
}

export default App;
