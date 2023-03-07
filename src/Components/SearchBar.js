import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import styles from "../StyleSheets/StyleSearchBar.module.css"

const SearchBar = () => {
    const { state, getData } = useContext(Context)

    const formSubmit = (e) => {
        e.preventDefault()
        if (e.target.q.value)
            getData(e.target.q.value)
    }

    return (
        <form onSubmit={formSubmit}>
            <div className={styles.search}>
                <input
                    type={"text"}
                    name={"q"} />

                <button type={"submit"}>GO</button>
            </div>
        </form>
    )
}

export default SearchBar