import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import styles from "../StyleSheets/StyleButton.module.css"
const PageButtons = () => {
    const { state: { data, pageNum }, changePage } = useContext(Context)

    return (
        <div className={styles.btns}>
            <button className={styles.btn} onClick={() => changePage(-1)}>Prev Page</button>
            <p>{pageNum}</p>
            <button className={styles.btn} onClick={() => {
                if (data.length < 48) return alert("No more results")
                changePage()
            }}>Next Page</button>
        </div>
    )
}

export default PageButtons