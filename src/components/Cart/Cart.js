import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const carts = props.cart;
    const { cart } = props;
    let total = 0;
    for (const engineer of cart) {
        total = total + engineer.salary;
    }
        return (
                <div className="cart">
                <h4>Players Added : { props.cart.length}</h4>  
                <h4>Total Cost : {total}</h4>
                
                {
                    carts.map(cart => <li>{cart.name}</li>)
                }
                </div>
        );
};

export default Cart;
