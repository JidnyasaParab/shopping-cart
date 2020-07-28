import React from 'react';
import './FoodCart.css';
import FoodCartLogo from './Pics/foodcart.jpg';

const FoodCart = (props) => (
    <div className="FoodCart">
        <img src={FoodCartLogo} alt="My FoodCart"></img>
    </div>
)

export default FoodCart;