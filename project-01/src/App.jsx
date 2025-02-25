import Footer from "./components/Footer"
import Header from "./components/Header"
import JSXRules from "./components/JSXRules"
import MainContent from "./components/MainContent"
import NumbersList from "./components/NumbersList"
import ProductInfo from "./components/ProductInfo"

const App = () => {
  return (
    <div>
      <Header/>
      <MainContent/>
      <JSXRules/>
      <ProductInfo/>
      <NumbersList/>
      <Footer/>
    </div>
  )
}

export default App