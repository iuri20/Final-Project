import { useState } from "react"
import StoreBooks from "../components/storeBooks/StoreBooks"


function HomePage({ books }) {
    const [searchBar, setSearchBar] = useState({ text: "" })
    function search(value) {
        setSearchBar({ text: value })
        //SEND TO BACK END
    }
    return (
        <div>
            <h1>HOME PAGE</h1>
            <form>
                <label>
                    <input value={searchBar.text} onChange={(e) => search(e.target.value)}></input><img src="#" />
                </label>
            </form>
            <StoreBooks books={books} /></div>
    )
}
export default HomePage