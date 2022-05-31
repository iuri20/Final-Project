import StoreBooks from "../components/storeBooks/StoreBooks"
import {useState} from "react"


function HomePage({ books }) {
    console.log('teste')
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
            <StoreBooks />
        </div>
    )
}
export default HomePage