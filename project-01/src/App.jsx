import { useEffect, useState } from "react"
import CopyInput from "./components/CopyInput"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import Header from "./components/Header"
import IconComponent from "./components/IconComponent"
import JSXRules from "./components/JSXRules"
import MainContent from "./components/MainContent"
import NumbersList from "./components/NumbersList"
import Person from "./components/Person"
import Product from "./components/Product"
import ProductInfo from "./components/ProductInfo"
import Profile from "./components/Profile"
import ProfileCard from "./components/ProfileCard"
import ShoppingList from "./components/ShoppingList"
import StyleCard from "./components/StyleCard"
import Switcher from "./components/Switcher"
import TodoList from "./components/TodoList"
import UserList from "./components/UserList"
import UserStatus from "./components/UserStatus"
import Weather from "./components/Weather"
import { FaShoppingCart } from "react-icons/fa";
import BasicEffect from "./components/BasicEffect"
import CounterEffect from "./components/CounterEffect"

const App = () => {
  const [value, setValue] = useState(0)
  
  useEffect(()=>{
    console.log("caling useEffect")
    document.title = `Increment ${value}`
  })
  
  // // render only once
  // useEffect(()=>{
  //   console.log("caling useEffect")
  //   document.title = `Increment ${value}`
  // }, [])
  
  // // render everytime value is being changed
  // useEffect(()=>{
  //   console.log("caling useEffect")
  //   document.title = `Increment ${value}`
  // }, [value])
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={()=>setValue(value + 1)}>Click Me</button>
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
      <FaShoppingCart />
      <StyleCard/>
      <ProfileCard/>
      <IconComponent/>
      <Counter/>
      <TodoList/>
      <Profile/>
      <ShoppingList/>
      <CopyInput/>
      <Switcher/>
      <BasicEffect/>
      <CounterEffect/>
    </div>
  )
}

export default App