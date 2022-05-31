import StateComponent from "./FilterComponents/StateComponent"
import styles from "../../styles/filtermenu.module.css"

export default function StateFilter({ setState, state }) {
    const states = ["New", "Semi-Used", "Very Used", "Refurbished"]
    return (
        <div className={styles.stateMenu} onClick={(e) => e.stopPropagation()} >
            {states.map((e, i) => {
                return <StateComponent key={i} setState={setState} stated={state} ele={e} />
            })}
        </div>
    )
}