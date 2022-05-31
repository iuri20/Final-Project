export default function StateComponent({ setState, ele, stated }) {
    return (
        <button onClick={() => { setState({ ...stated, state: ele }) }}>{ele}</button>
    )
}