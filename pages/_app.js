import "@/styles/globals.css";
import MainContainer from "../components/MainContainer";

export default function App({ Component, pageProps }) {
  return (
    <MainContainer>
      {/* Esse é o children */}
      <Component {...pageProps} />
    </MainContainer>
  )
}
