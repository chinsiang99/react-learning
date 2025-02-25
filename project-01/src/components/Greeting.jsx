const Greeting = ({timeOfDay}) => {
  return (
    <div>
        <h1>{timeOfDay === 'morning' ? 'Good morning' : timeOfDay === 'afternoon'? 'Good afternoon': 'Invalid time of day'}</h1>
    </div>
  )
}

export default Greeting