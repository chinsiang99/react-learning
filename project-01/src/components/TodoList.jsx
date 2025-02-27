import { useState } from "react"

const TodoList = () => {
    const [todo, setTodo] = useState([])
    const [text, setText] = useState("")

    const handleAdd = () => {
        setTodo([...todo, text])
        setText('')
    }
  return (
    <>
        <div>TodoList</div>
        <div>
            <ul>
                {todo.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
        <div>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a task..."
            />
            <button onClick={handleAdd}>+</button>
        </div>
    </>
  )
}

export default TodoList