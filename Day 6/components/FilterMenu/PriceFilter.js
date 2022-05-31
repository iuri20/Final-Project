import PriceComponent from "./FilterComponents/PriceComponent"

export default function PriceFilter({ setState, state }) {
    const prices = ["5-10", "10-15", "15-20", "20-30", "30+"]
    return (
        <div onClick={(e) => e.stopPropagation()} >
            {prices.map((e, i) => {
                return <PriceComponent key={i} setState={setState} state={state} ele={e} />
            })}
        </div>
    )
}