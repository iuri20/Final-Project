import styles from "../../../styles/filtermenu.module.css"
export default function GenreComponent({ setState, ele, state }) {
    return (
        <button className={styles.button} onClick={(e) => { setState({ ...state, genre: ele }) }}>{ele}</button>
    )
}