import { useEffect } from "react"

const BasicEffect = () => {
    useEffect(()=>{
        console.log("hello there it will only appear once where the component mounts for the first time")
    }, [])
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect