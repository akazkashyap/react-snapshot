import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import styles from "../StyleSheets/StyleNavBar.module.css"

const NavBar = () => {
    const { getData } = useContext(Context)

    const clickHandler = (e) => {
        if (e.target.text)
            console.log(e.target.text)
        getData(e.target.text)
    }
    return (
        <nav >
            <ul className={styles.nav} onClick={clickHandler}>
                <li><a src="#">Mountains</a></li>
                <li><a src="#">Beaches</a></li>
                <li><a src="#">Oceans</a></li>
                <li><a src="#">Animals</a></li>
                <li><a src="#">Buildings</a></li>
            </ul>
        </nav >
    )
}

export default NavBar