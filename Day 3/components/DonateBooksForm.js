import { useState } from "react"

export default function DonateBooksForm() {
    const [radio, setRadio] = useState("")
    const donateResell = [
        { value: 'donate', label: 'Donate' },
        { value: 'resell', label: 'Resell' },
    ]
    return (

        <form onSubmit={(e) => {
            e.preventDefault(),
                console.log("Submit Sucessfull")
        }}>
            <label>Contacto
                <input type="number" />
            </label>
            <label>Morada
                <input type="text" />
            </label>
            <label>Codigo Postal
                <input type="number" />
            </label>
            <label>Data para Entrega
                <input type="date" />
                <input type="time" />
            </label>
            <label>Total Amount
                <input type="number" />
            </label>

            <label>Book Information:
                <label>Title
                    <input type="text" />
                </label>
                <label>Author
                    <input type="text" />
                </label>
            </label>
            <button onClick={(e) => {
                console.log("Add Books"),
                    e.preventDefault()
            }}>Add</button>
            {
                donateResell.map((o) => (
                    <label htmlFor={o.value} key={o.value}>
                        <input
                            id={o.value}
                            type="radio"
                            value={o.value}
                            checked={radio === o.value}
                            onChange={(event) => setRadio(event.target.value)}
                        />
                        {o.label}
                    </label>
                ))
            }
            <input value="Confirm Data" type="submit" />


        </form>
    )
}