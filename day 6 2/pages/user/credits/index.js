import { useState } from "react";
import { useEffect } from "react";
import AddCredits from "../../../components/CreditsPage/AddCredits";
import CircleCredits from "../../../components/CreditsPage/CircleCredits";
import styles from "../../../styles/credits.module.css"

export default function CreditsPage() {
    const [credits, setCredits] = useState(0)
    useEffect(()=>{
        setCredits(Number(localStorage.getItem("Credits")))
    })
    
    ///console.log(credits)

    return (
        <div className={styles.creditPage}>
            <p>Credits</p>
            <CircleCredits credits={credits} />
            <AddCredits credits={credits} setCredits={setCredits} />
        </div>
    )
}

