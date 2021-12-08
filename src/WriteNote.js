import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Form} from 'react-bootstrap';
import './WriteNoteStyle.css'


function WriteNote() {
    const [checked, setIsChecked] = useState(false);
      
    const handleOnChange = () => {
      setIsChecked(!checked);
    };

    function NoteInfo()
      {
        return(
        <>
        <Row>
          <Col>
        <Form.Control as="textarea" rows={3} id = "bigTxt" />
         </Col>
          </Row>
          <br/>
        </>)
      }
    
      return( <>
        <div>
          <h2>Writing a note</h2>
          <p>Would you like to write a note to go with your flowers? </p>
          <input type="checkbox" checked = {checked} onChange={handleOnChange}/>
                <label>Yes</label>
             
               {checked && ( <div>
                  <NoteInfo/>
                </div>)
               } 
            </div>
          </>
          );
        }

export default WriteNote;