import styles from "../../../styles/filtermenu.module.css"
export default function StateComponent({ setState, ele, stated }) {
    return (
        <button className={styles.button} onClick={() => { setState({ ...stated, state: ele }) }}>{ele}</button>
    )
}