import styles from "../styles/Home.module.css";

import Head from "next/head";
// Componente de Imagem do Next
import Image from "next/image";

export default function Home() {
  return (
      <>
          {/* Passando metatags para a nossa página Home */}
          <Head>
            <title>Minha Loja - Tela inicial</title>
            <meta name="keywords" content="Roupas, Calçados, Boné"></meta>
            <meta name="description" content="Encontre a melhor roupa para você"></meta>
          </Head>
          <div>
              <h1 className={styles.title}>Hello World Next.js</h1>
              {/* Componente de imagem sendo utilizado para inserir uma imagem estática na nossa Home */}
              <Image 
                src="/images/city.jpg" 
                width="400" 
                height="500" 
                alt="Cidade a noite"
              />
          </div>
      </>
      
  );
}
