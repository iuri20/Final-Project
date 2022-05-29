import { useRouter } from "next/router"
export default function Book({ books }) {
    const router = useRouter()
    const id = router.query.bookId
    console.log(id)
    return (<h1>THIS IS A BOOK WITH ID: {id}</h1>)

}