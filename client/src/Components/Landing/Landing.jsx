import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = props => {
    return (
        <div className={styles.landing_page}>
         
             <h1 className={styles.colorasd}>The Countries App =)</h1>
             <div>
            <span className={styles.colorasd}> Exequiel Figueroa</span>
         
            <NavLink className={styles.home_link} to="/home/1">Start</NavLink>
            </div>
            </div>
    )
}

export default Landing;