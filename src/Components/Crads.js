import React, { useContext, useEffect } from 'react'
import { Context } from '../Context/Context'
import styles from "../StyleSheets/StyleCards.module.css"

const Crads = () => {
    const { state: { data, pageNum }, getData } = useContext(Context)


    useEffect(() => {
        getData("", pageNum)
    }, [pageNum])



    return (
        <div className={styles.gridBox}>
            <div className={styles.cards}>
                {
                    !data ? "loading" :
                        data.map((row) => {
                            return (
                                <div key={row.id} className={styles.card}>
                                    <img src={row.previewURL} />
                                    <div className={styles.imgText}>
                                        <a href={row.largeImageURL} target={"_blank"} download>Download</a>
                                    </div>
                                </div>
                            )
                        })
                }

            </div>
        </div >
    )
}

export default Crads