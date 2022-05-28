import StoreBooks from "../components/StoreBooks"


function HomePage({ books }) {
    return (
        <div>
            <h1>HOME PAGE</h1>
            <StoreBooks books={books} /></div>
    )
}
export default HomePage