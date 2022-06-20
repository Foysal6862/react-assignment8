import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Card.css";

const Card = (props) => {
        const { name, role, age, country, salary, img } = props.engineer;
        return (
                <div className="card-container">
                        <div className="card">
                                <img className="image" src={img} alt="" />
                                <div>
                                        <h4>Name : {name}</h4>
                                        <h4>Role : {role}</h4>
                                        <h4>Age :{age}</h4>
                                        <h4>Country :{country}</h4>
                                        <h4>Salary :{salary}</h4>
                                </div>
                                <button
                                        className="regular-btn"
                                        onClick={()=>props.handleAddToCart(props.engineer)}
                                >
                                      <FontAwesomeIcon icon={faShoppingCart} />  Add To Cart
                                </button>
                        </div>
                </div>
        );
};

export default Card;
