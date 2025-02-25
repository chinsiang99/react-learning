const Person = (props) => {
  const {age, name} = props
  return (
    <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
    </div>
  )
}

export default Person