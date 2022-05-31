import styles from "../../../styles/filtermenu.module.css"
export default function PriceComponent({ setState, ele, state }) {
    return (
        <button className={styles.button} onClick={(e) => { setState({ ...state, price: ele }) }}>{ele}</button>
    )
}