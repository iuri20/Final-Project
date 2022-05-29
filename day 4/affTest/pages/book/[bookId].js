import { useRouter } from "next/router"
export default function Book() {
    const router = useRouter()
    const id = router.query.bookId
    console.log(id)
    return (<h1>THIS IS A BOOK WITH ID: {id}</h1>)

}