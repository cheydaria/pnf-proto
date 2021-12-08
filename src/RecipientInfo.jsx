import React from "react";
import ReactDOM from "react-dom";

function RecipientInfo () {
   return (
       <>
        <label for = "firstName">First name</label>
        <input type = "text" name = "userInfo" value = "firstName" id = "firstName"> </input>

        <label for = "lastName">Last name</label>
        <input type = "text" name = "userInfo" value = "lastName" id = "lastName"> </input>

        <label for = "strtAdd">Street address</label>
        <input type = "text" name = "userInfo" value = "strtAdd" id = "strtAdd"> </input>

        <label for = "city">City</label>
        <input type = "text" name = "city" value = "city" id = "city"> </input>

        <label for = "postalCd">Postal Code</label>
        <input type = "text" name = "postalCd" value = "postalCd" id = "postalCd"> </input>
     
       </>
    ); 
}
export default RecipientInfo;
