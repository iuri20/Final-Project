import DonateBooksForm from "../../components/DonateBooksForm";
import Link from "next/link"

export default function Donate() {
    return (
        <div>
            <h1>Donate Books</h1>
            <Link href="/donate/check">Check Donations</Link>
            <Link href="/donate/form">Donate Books</Link>
        </div>

    )
}