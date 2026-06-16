import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar(){
    return(

        <nav className = {styles.nav}>
            <span>Maria Sekyi</span>
                <div className = {styles.links}>
                    <Link to ="/" className = {styles.link}>Home</Link>
                    <Link to ="/" className = {styles.link}>Work</Link>
                </div>
        </nav>
    )
}
export default Navbar