
export const Products = (props) => {



  function addToCart(prod){
    const propduct = props.cart.filter(p => p._id == prod._id)[0] 
    if(propduct){
      const index = props.cart.findIndex(p => p._id == propduct._id)
      console.log(propduct)
      if(!(props.cart[index]).hasOwnProperty("amount")){
      props.cart[index].amount = 2;
      }else{
        props.cart[index].amount++;
      }
      props.setCart([...props.cart])
      return; 
    } 
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
