import { useRouter } from "next/router"
export default function Book(props) {
    const router = useRouter()
    const id = router.query.bookId
    return (<h1>THIS IS A BOOK WITH ID: {id}</h1>)

}