import GenreComponent from "./FilterComponents/GenreComponent"

export default function GenreFilter({ setState, state }) {
    const genres = ["Manga", "Horror", "Comedy", "Society", "Romance", "Poetry"]
    return (
        <div onClick={(e) => e.stopPropagation()}>
            {genres.map((e, i) => {
                return <GenreComponent key={i} setState={setState} state={state} ele={e} />
            })}
        </div>

    )
}