import React from 'react'

const Cart = (props) => {

    function buy() {
       console.log(props.cart)

        let prodsIds = [];
        if(props.cart.length > 0){
            props.cart.forEach(prod => {
                prodsIds.push(prod._id)
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

    return (

        <div>
            {

                props.cart.map(prod => (
                    <div>{prod.name}</div>
                ))}
            <button onClick={() => { buy() }}>buy</button>
        </div>
    )
}

export default Cart