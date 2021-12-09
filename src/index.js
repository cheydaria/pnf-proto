import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import Gift from './Gift';
import WriteNote from './WriteNote';
import Pnf from './logo.png';
import "./MainStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';


function PNF() {
  //the dynamic form area 
 const [sectionContent,setContent] = useState(()=> {
   return <Gift/>
 })  

 //the top links for navigating forward and backward
 const [leftLink,setLeft] = useState(()=> {
  return <a href="">Back to cart</a>
})  

const [rightLink,setRight] = useState(()=> {
  return <a href="">Proceed to write a note</a>
})  
 
const setLinks = () => {
  setLeft(<a href="">Back to shipping information</a>)
  setRight(<a href="">Proceed to billing information</a>)
}
  const setNote = () => {
  setContent(<WriteNote/>)
}

return (
  <>
  <Row>
    <Col md = {10}> </Col>
   <Col md = {2}><div><img src = {Pnf}/> </div> </Col>
   </Row>

  <Container>
  <div>  
    <Row>
      <Col md = {6}>
    <div id = "leftL">{leftLink} </div>
    </Col>
    <Col md = {6}>
   <div id = "rightL"> {rightLink} </div>
   </Col>
   </Row>
  </div>
  
  <Container id = "contentArea">
  <h1>Checkout</h1>
  
 
  <div id = "formContent"> {sectionContent} </div>
  <Row>
    <Col md = {7}> </Col>
    <Col md = {5}> 
  <button type = "button" onClick = {() => {
    setNote();
    setLinks();
  }}> Proceed to next step </button>
  </Col>
  </Row>
  </Container>
  </Container>
  </>
)

}

ReactDOM.render(<PNF />, document.getElementById('root'));