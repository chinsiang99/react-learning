const Weather = (props) => {
    const {temperature} = props

    if(temperature < 15){
        <h1>It's cold outside</h1>
    }else if(temperature >= 15 && temperature <= 25){
        <h1>It's nice outside!</h1>
    }else{
        <h1>It's hot outside!</h1>
    }
}

export default Weather