import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import styles from "../StyleSheets/StyleButton.module.css"
const PageButtons = () => {
    const { state: { data, pageNum }, changePage } = useContext(Context)

    const handleIncrease = ()=>{
        if (data.length < 48) return alert("No more results")
        changePage()
    }
    const handleDecrease = () =>{
        if(pageNum === 1) return alert (`You are on the page no. ${pageNum} so can't go back`)
         changePage(-1)
    }

    return (
        <div className={styles.btns}>
            <button
                className={styles.btn}
                onClick={handleDecrease}
                >Prev Page</button>

            <p>{pageNum}</p>

            <button 
                className={styles.btn} 
                onClick={handleIncrease}
            >Next Page</button>
        </div>
    )
}

export default PageButtons