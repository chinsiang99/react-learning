import Greet from "./Greet"
import WelcomeMessage from "./WelcomeMessage"

const Header = () => {
  return (
    <div>
        <Greet/>
        <WelcomeMessage/>
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