import { useRouter } from "next/router"
export default function Book({ books }) {
    const router = useRouter()
    const id = router.query.bookId
    const book = books.find(e => e.id = id)
    console.log(book)
    return (<h1>THIS IS A BOOK WITH ID: {id}</h1>)

}