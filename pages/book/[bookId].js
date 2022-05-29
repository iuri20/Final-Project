import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Book() {
    const router = useRouter()
    //const id = router.query.bookId
    const id =  "6293c204d905cdd6f3f51c6b"
    console.log('id :'+id)
    const [state, setState] = useState([])
    useEffect(() => {
        async function CallBookFindOne(){
            
          const res = await fetch(
            '/api/bookFindOne/'+id, {
            
            headers: {
              "Content-Type": "application/json"
            },
            params: id,
            method: "GET"
          })

          const json = await res.json()
          setState(json)
          console.log(state)
          
        }
        CallBookFindOne()
      }, [])
      
      

        return (<h1>THIS IS A BOOK WITH ID: {id}<br />
                {state.name}
                </h1>)

}