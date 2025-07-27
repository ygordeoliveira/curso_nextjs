import Link from "next/link";
import Head from "next/head";
import styles from "../styles/About.module.css";

export default function About() {
    return (
        <>
            {/* Passando metatags para a nossa página Home */}
            <Head>
                <title>Página de About</title>
                {/* Define palavras-chave relacionadas á página  */}
                <meta name="keywords" content="Sobre Nós"></meta>
                <meta name="description" content="Conheça mais sobre a história da Loja"></meta>
            </Head>
            <div>
                <h1>Página de About</h1>
                <Link href="/" className={styles.link}>Voltar</Link>
            </div>
        </>
    )
}