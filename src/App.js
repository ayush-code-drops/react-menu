import styles from './App.module.css'
import Buttoncom from './components/Button';
function App() {

  return (
    <>
      <div className={styles.flex}>
      <Buttoncom title='Join Us' type='sky' />
      <Buttoncom title='Settings' type='teal' />
      <Buttoncom title='Login' type='orange' />
      <Buttoncom title='Contact Us' type='error' />
      <Buttoncom title='Search' type='green' />
      <Buttoncom title='Help' type='purple' />
      <Buttoncom title='Home' type='pink' />
      <Buttoncom title='Download' type='golden' />

      </div>
      
    </>
  );
}

export default App;
