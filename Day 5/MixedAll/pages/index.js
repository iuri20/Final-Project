import StoreBooks from "../components/StoreBooks"


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