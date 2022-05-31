import StateComponent from "./FilterComponents/StateComponent"

export default function StateFilter({ setState, state }) {
    const states = ["New", "Semi-Used", "Very Used", "Reconditioned"]
    return (
        <div onClick={(e) => e.stopPropagation()} >
            {states.map((e, i) => {
                return <StateComponent key={i} setState={setState} stated={state} ele={e} />
            })}
        </div>
    )
}