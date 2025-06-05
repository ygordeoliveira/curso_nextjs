// Importar o Head para nós podermos passar os metadados para a página
import Head from "next/head";

export default function Contact() {
    return (
        <>
            {/* Passando metadados para a página de contato do nosso site */}
            <Head>
                <title>Página de Contato</title>
                <meta name="keywords" content="Contato"></meta>
                <meta name="description" content="Entre em contato conosco"></meta>
            </Head>
            <h1>Página de Contato</h1>
        </>
    )
}