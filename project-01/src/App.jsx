import Footer from "./components/Footer"
import Header from "./components/Header"
import JSXRules from "./components/JSXRules"
import MainContent from "./components/MainContent"
import ProductInfo from "./components/ProductInfo"

const App = () => {
  return (
    <div>
      <Header/>
      <MainContent/>
      <JSXRules/>
      <ProductInfo/>
      <Footer/>
    </div>
  )
}

export default App