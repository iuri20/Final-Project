import { useState } from "react"
import FilterMenu from "../components/FilterMenu/DEPRECEATEDFilterMenu"
import GenreFilter from "../components/FilterMenu/GenreFilter"
import PriceFilter from "../components/FilterMenu/PriceFilter"
import StateFilter from "../components/FilterMenu/StateFilter"
import StoreBooks from "../components/storeBooks/StoreBooks"


function HomePage({ books }) {
    const [filterButton, setFilterButton] = useState(false)
    const [filter, setFilter] = useState({
        price: "",
        genre: "",
        state: ""
    })
    const [buttons, setButtons] = useState([
        {
            name: "Price",
            clicked: false,
            component: <PriceFilter setState={setFilter} state={filter} key={1} />
        }, {
            name: "Genre",
            clicked: false,
            component: <GenreFilter setState={setFilter} state={filter} key={2} />
        }, {
            name: "State",
            clicked: false,
            component: <StateFilter setState={setFilter} state={filter} key={3} />
        }, {
            name: "Sort",
            clicked: false,
        }])
    const [searchBar, setSearchBar] = useState({ text: "" })
    function search(value) {
        setSearchBar({ text: value })
        //SEND TO BACK END
    }
    return (
        <div onClick={() => setFilterButton(false)} >
            <h1>HOME PAGE</h1>
            <form>
                <label>
                    <input value={searchBar.text} onChange={(e) => search(e.target.value)}></input><img src="#" />
                </label>
            </form>
            {!filterButton &&
                <button onClick={(e) => { e.stopPropagation(), setFilterButton(true) }}>Filter</button>
            }

            {filterButton &&
                <div onClick={(e) => e.stopPropagation()}>
                    {buttons.map((e, i) => {
                        return (
                            <button key={i} onClick={() => { console.log(e.clicked), setButtons(buttons.map(ele => (ele.name === e.name) ? { ...ele, clicked: true } : { ...ele, clicked: false })) }}>{e.name}</button>
                        )
                    })}

                    {buttons.map((e, i) => {
                        return e.clicked ? e.component : ""
                    })}
                </div>
            }
            <StoreBooks books={books} /></div>
    )
}
export default HomePage