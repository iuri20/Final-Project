export default function GenreComponent({ setState, ele, state }) {
    return (
        <button onClick={(e) => { setState({ ...state, genre: ele }) }}>{ele}</button>
    )
}