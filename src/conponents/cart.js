import React from 'react'

const Cart = (props) => {

    function buy() {
       console.log(props.cart)

        let prodsIds = [];
        if(props.cart.length > 0){
            props.cart.forEach(prod => {
                if(prod.amount){
                    for(let i = 0;i < prod.amount;i++){
                        prodsIds.push(prod._id)
                    }
                }else{
                    prodsIds.push(prod._id)
                }
            });

            console.log(prodsIds)

            fetch('http://localhost:1000/addToCart',{
                method:'POST',
                headers:{
                    'Content-Type':'Application/json'
                },
                body:JSON.stringify({
                    ids:prodsIds
                })
            }).then(res => {
                console.log(res)
            })
        } else{
            alert('cart is empty')
        }
      
    }

    function deleteItem(index){
        props.cart.splice(index,1)
        props.setCart([...props.cart])
    }

    return (

        <div>
            {

                props.cart.map((prod,index) => (
                    <div>
                        <ul>
                           <li>{prod.name}</li>
                           <li>{prod.price}</li>
                           <li>amount: {(prod.hasOwnProperty("amount") ? prod.amount : 1)}</li>
                           <button onClick={()=>{deleteItem(index)}}>remove item</button>
                        </ul>
                        
                    </div>
                ))}
            <button onClick={() => { buy() }}>buy</button>
        </div>
    )
}

export default Cart