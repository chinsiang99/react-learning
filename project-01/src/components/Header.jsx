import Greet from "./Greet"

const Header = () => {
  return (
    <div>
        <Greet/>
        <h1>Welcome to my Website</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </nav>
    </div>
  )
}

export default Header