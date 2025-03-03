import { useEffect, useState } from "react"

const CounterEffect = () => {
    const [state, setState] = useState(0)
    useEffect(()=>{
        document.title = `Count is ${state}`
    }, [state])
  return (
    <button onClick={()=> setState(()=> state + 1)}>Add count</button>
  )
}

export default CounterEffect