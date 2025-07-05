import Main from './Main';
import styles from './Body.module.css';

function Body(){
    return (
        <div className={styles.body}>
            <h1>Motorcycle Showroom</h1>
            <h4>Reserve a Test Ride</h4>
            <Main />
        </div>
    );
}

export default Body;
