import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/MainContainer.module.css";

// o children é uma prop utilizada para representar o conteúdo colocado dentro de um componente
export default function MainContainer({children}) {
    return (
        <>
            <Navbar />
            {/* Aplicando os estilos para os conteúdos das páginas */}
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </>
    )
}