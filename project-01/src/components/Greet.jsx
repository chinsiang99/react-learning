const Greet = () => {
    const name = 'John'
    const currentDate = new Date().toLocaleDateString()
    return (
        <div>
            <h1>Good day {name} !</h1>
            <p>Current Date: {currentDate}</p>
        </div>
    )
}

export default Greet