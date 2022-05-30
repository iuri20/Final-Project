import { useEffect } from "react"


function CartPage() {
    useEffect(() => {
        console.log(localStorage.getItem("token"))

    }, [])
    return (
        <div>
            <h1>THIS IS A CART</h1>
        </div>


    )
}
export default CartPage 