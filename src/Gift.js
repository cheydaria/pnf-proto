import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Form} from 'react-bootstrap';

function Gift() {
  //track the checkbox state
    const [checked, setIsChecked] = useState(false);
    //toggle the checkbox state  
    const handleOnChange = () => {
      setIsChecked(!checked);
    };
    
    //contains the form for shipping to recipient 
      function ShipInfo()
      {
        return(
        <>
        <Row>
        <Col md = {6}>
        <label>
        Yes
        </label> 
        <br/>
        <Form.Control size = "lg" type="text" className = "normField"/>
       </Col>

       <Col md = {6}>
        <label>
        Last name
        </label>
        <br/>
        <Form.Control size="lg" type="text" className = "normField"/>
        </Col>
        </Row>
    <br/>

    <Row>
    <Col>
        <label>
        Street address
        </label>
        <br/>
        <Form.Control size="lg" type="text" id = "strtAdd" />
        </Col>
      
    </Row>

        <br/>
    <Row>
      <Col md = {6}>
        <label>
        City
        </label>
        <br/>
        <Form.Control size="lg" type="text" className = "normField"/>
        </Col>
    
    <Col md = {6}>
        <label>Region</label>  
        <br/>
        <Form.Select size="lg" className = "selectNorm">
        <option>Select a region</option>
        <option value="nAmerica">North America</option>
        <option value="sAmerica">South America</option>
        <option value="cAmerica">Central America</option>
      </Form.Select>
      </Col>
    </Row>
      <br/>
    
    <Row>
      <Col md = {6}>
        <label>
        Postal code
        </label>
        <br/>
        <Form.Control size="lg" type="text" className = "normField"/>
    </Col>

    <Col>
      <label>Country</label>  
      <br/>
      <Form.Select size="lg" className = "selectNorm">
      <option>Select a country</option>
        <option value="usa">The United States of Americs</option>
        <option value="can">Canada</option>
        <option value="mex">Mexico</option>
      </Form.Select>
      </Col>
      </Row>
      <br/>
        </>)
      }
    
    
      return( <>
    <div>
      
      <h2>Shipping information</h2>
      <p>These are beautiful flowers, are they a gift for someone? </p>
      <input type="checkbox" checked = {checked} onChange={handleOnChange}/>
            <label>Yes</label>
         
           {checked && ( <div>
              <ShipInfo/>
            </div>)
           }
    <br/> 
        </div>
      </>
      );
    }


export default Gift;