import { useState } from "react"

const Switcher = () => {
    const [switcher, setSwitcher] = useState(false)
  return (
    <div>
        {switcher ? (
            <span>dark</span>
        ) : (
            <span>light</span>
        )}

        <br/>

        <input type="text" key={switcher ? 'dark' : 'light'} />
        <button onClick={()=>setSwitcher(()=>!switcher)}>Switch</button>
    </div>
  )
}

export default Switcher