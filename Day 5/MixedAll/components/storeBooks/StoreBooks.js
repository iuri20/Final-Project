import Book from "./Book"
import styles from "../../styles/book.module.css"
import { useState } from "react"

export default function StoreBooks() {
    const [state, setState] = useState([])

    useEffect(() => {
        async function CallBack() {
            console.log('CallBooks')
            const res = await fetch(
                '/api/books/', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "GET"
            })
            const json = await res.json()
            setState(json)
            console.log(state)

        }
        CallBack()
    }, [])


    return (

        <div className={styles.storeMain}>
            <div className={styles.storeBooks}>
                {state ? state.map((e, i) => {
                    console.log(e)
                    return <Book id={e._id} key={e._id} book={e} />
                }) : "asd"}
            </div>
        </div>
    )
}