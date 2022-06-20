import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./EngineerDetail.css";

const EngineerDetail = () => {
        const [engineers, setEnginners] = useState([]);
        const [cart, setCart] = useState([]);
        useEffect(() => {
                fetch(`./profile.JSON`)
                        .then((res) => res.json())
                        .then((data) => setEnginners(data));
        }, []);

        const handleAddToCart = (engineer) => {
                const newCart = [...cart, engineer];
                setCart(newCart);
        };
        return (
                <div className="engineer">
                        <div className="card-container">
                                {engineers.map((engineer) => (
                                        <Card
                                                key={engineer.name}
                                                engineer={engineer}
                                                handleAddToCart={
                                                        handleAddToCart
                                                }
                                        ></Card>
                                ))}
                        </div>
                        <div className="cart-container">
                                <Cart cart={cart}></Cart>
                        </div>
                </div>
        );
};

export default EngineerDetail;
