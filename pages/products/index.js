import Link from "next/link";
import styles from "../../styles/Products.module.css";

export default function Products() {
    return (
        <>
            <h1>Página de Produtos</h1>
            <Link href="/" className={styles.link}>Voltar</Link>
        </>
    )
}
