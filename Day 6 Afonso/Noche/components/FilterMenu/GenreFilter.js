import GenreComponent from "./FilterComponents/GenreComponent"
import styles from "../../styles/filtermenu.module.css"

export default function GenreFilter({ setState, state }) {
    const genres = ["Manga", "Horror", "Comedy", "Society", "Romance", "Poetry"]
    return (
        <div className={styles.genreMenu} onClick={(e) => e.stopPropagation()}>
            {genres.map((e, i) => {
                return <GenreComponent key={i} setState={setState} state={state} ele={e} />
            })}
        </div>

    )
}