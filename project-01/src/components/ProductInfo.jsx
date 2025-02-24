const ProductInfo = () => {
    const productObject = {
        name: 'Product 1',
        price: 10.99,
        availability: "In stock"
    }
  return (
    <div>
        <h1>Name: {productObject.name}</h1>
        <h1>Price: {productObject.price}</h1>
        <h1>Availability: {productObject.availability}</h1>
    </div>
  )
}

export default ProductInfo