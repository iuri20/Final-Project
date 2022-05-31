import DonateBooksForm from "../../components/DonateBooksForm";
import Link from "next/link"
import styles from "../../styles/donate.module.css"

export default function Donate() {
    return (
        <div className={styles.container}>
            <form>
                <label>
                    <input type="text"></input>
                    <img src="#" />
                </label>
            </form>
            <Link href="/donate"><button>Check Donations</button></Link>
            <DonateBooksForm />
        </div>

    )
}