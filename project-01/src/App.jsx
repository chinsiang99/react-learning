import Footer from "./components/Footer"
import Header from "./components/Header"
import JSXRules from "./components/JSXRules"
import MainContent from "./components/MainContent"
import NumbersList from "./components/NumbersList"
import ProductInfo from "./components/ProductInfo"
import UserList from "./components/UserList"

const App = () => {
  return (
    <div>
      <Header/>
      <MainContent/>
      <JSXRules/>
      <ProductInfo/>
      <NumbersList/>
      <UserList/>
      <Footer/>
    </div>
  )
}

export default App