import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import Header from "./components/Header"
import JSXRules from "./components/JSXRules"
import MainContent from "./components/MainContent"
import NumbersList from "./components/NumbersList"
import Person from "./components/Person"
import Product from "./components/Product"
import ProductInfo from "./components/ProductInfo"
import UserList from "./components/UserList"
import UserStatus from "./components/UserStatus"
import Weather from "./components/Weather"

const App = () => {
  return (
    <div>
      <Header/>
      <MainContent/>
      <JSXRules/>
      <ProductInfo/>
      <NumbersList/>
      <UserList/>
      <Person name={"chin siang"} age={26}/>
      <Product name={"Mouse"} price={99}/>
      <Weather temperature={13}/>
      <UserStatus loggedIn={true} isAdmin={false}/>
      <Greeting timeOfDay={"morning"}/>
      <Footer/>
    </div>
  )
}

export default App