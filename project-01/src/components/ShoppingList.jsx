import { useState } from "react"

const ShoppingList = () => {
    const [shoppingList, setShoppingList] = useState([])

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)

    const handleChange = (e) => {
        const { name, value } = e.target

        if(name === 'name'){
            setName(value)
        }else if(name === 'quantity'){
            setQuantity(Number(value))
        }
    }

    const handleSubmit = () => {
        setShoppingList([...shoppingList, {name, quantity}])
        setName("")
        setQuantity(0)
    }
  return (
    <>
        <div>ShoppingList</div>
        <ul>
            {shoppingList.map((list, index)=>(
                <li key={index}>Name: {list.name}, Quantity: {list.quantity}</li>
            ))}
        </ul>
        <input type="text" name="name" placeholder="Input shopping name here..." onChange={handleChange} value={name}/>
        <input type="number" name="quantity" placeholder="Input quantity here..." onChange={handleChange} value={quantity}/>
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default ShoppingList