import StoreBooks from "../components/StoreBooks"


function HomePage({ books }) {
    console.log('teste')
    return (
        <div>
            <h1>HOME PAGE</h1>
            <StoreBooks/>
        </div>
    )
}
export default HomePage