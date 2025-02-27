import { useState } from "react"

const Counter = () => {
  const [state, setState] = useState(()=> 0)
  return (
    <div>
        <p>Count: {state}</p>
        <button onClick={() => setState(state + 1)}>+</button>
    </div>
  )
}

export default Counter