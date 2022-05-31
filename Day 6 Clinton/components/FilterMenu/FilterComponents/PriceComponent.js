export default function PriceComponent({ setState, ele, state }) {
    return (
        <button onClick={(e) => { setState({ ...state, price: ele }) }}>{ele}</button>
    )
}