
export const Products = (props) => {



  function addToCart(prod){
   
    props.setCart([...props.cart,prod])
  }

  return (
    <div className="shop-container">
    {props.products.map((prod) => (
      <ul>
        <li>name: {prod.name} </li>
        <li>price: {prod.price}</li>
        <button onClick={()=>{addToCart(prod)}}>add to cart</button>
      </ul>
    ))}
    </div>
  )
}
