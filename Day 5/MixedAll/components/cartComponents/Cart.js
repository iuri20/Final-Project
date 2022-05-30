import { useState } from "react"
import CartBook from "./CartBook"
import Link from "next/link"

export default function CartComponent() {
    //RECEBE UM FETCH DO CARRINHO DO BACKEND
    const [saldo, setSaldo] = useState(45)


    const [books, setBooks] = useState(
        [
            { title: "Lorem", author: "Ipsum", image: "#", price: 15, _id: 123212421 },
            { title: "Lo11rem", author: "Ips11um", image: "#", price: 20, _id: 12321284357 },
            { title: "Lo11redwwdm", author: "Ipsss11um", image: "#", price: 60, _id: 12321286776357 }]
    )

    const price = books.reduce((acc, e) => {
        return acc + e.price
    }, 0)


    function deleteCartBook(e) {
        setBooks(prev => prev.filter(ele => ele._id !== e))
    }
    function realizarCompra() {
        setBooks([])
        setSaldo(prev => prev - price)
    }

    return (
        <div>
            {books.map(e => {
                return (
                    <CartBook key={e._id} book={e} removeFunc={deleteCartBook} />
                )
            })}
            <div>Total: {price}C</div>
            <div>Saldo: {saldo}C</div>
            {saldo < price ?
                <Link href="/user/credits"><button>Charge Account</button></Link> :
                <button onClick={() => realizarCompra()}>Comprar</button>}
        </div>
    )
}