
import { useEffect, useState } from "react"

const MyProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:1000/cart')
    .then(res => res.json()).then(data => {
      console.log(data)
      setProducts(data)

    }).catch((err)=> {
      console.log(err)
      
       //for testing
    setProducts([
      {
        amount: 2,
        prod_id: {
          name: "test",
          price: 20
        }
      },
      {
        amount: 1,
        prod_id: {
          name: "test",
          price: 20
        }
      },
      {
        amount: 5,
        prod_id: {
          name: "test",
          price: 20
        }
      },
      {
        amount: 3,
        prod_id: {
          name: "test",
          price: 20
        }
      }
    ])


    })

   
  }, [])



  return (
    <div className="cart">
      <h1>your cart</h1>
      <div className="cart-container"> {products.map(prod => (
        <div>
          <ul className="cart-ul">
            <li>
              amount: {prod.amount}
            </li>
            <li>
              name: {prod.prod_id.name}
            </li>
            <li>
              price: {prod.prod_id.price}
            </li>
          </ul>
        </div>

      ))}

      </div>
    </div>
  )
}

export default MyProducts