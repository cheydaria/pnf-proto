import React from "react";
import ReactDOM from "react-dom";
function QuestionGift () {
   return (
       <>
       <h1>Checkout</h1>
       <h2>Shipping Information</h2>
        <p>Those are beautiful flowers, are they a gift for someone?</p>
        <input type = "checkbox" name = "flower_gift" value = "isGift" id = "flowerGift"> </input>
        <label for="flowerGift">Yes</label>
       </>
    ); 
}
export default QuestionGift;

