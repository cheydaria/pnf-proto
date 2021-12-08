import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
function PNF() {
 
  //the prompt will change
  const [sectionPrompt, setPrompt] = useState(<GiftPrompt/>);

  //the hidden content can change
  const [giftHiddenCont, setGiftHiddenCont] = useState(<ShipInfo/>);
  
  function GiftPrompt ()
  {
    return (<> <p>Those are beautiful flowers are they a gift for someone?</p> </>)
  }

  function NotePrompt ()
  {
    return (<> <p>Would you like to write a note to go with your flowers?</p> </>)
  }

  const setNotePrompt = () => {
    setPrompt(previousState => {
      return { ...previousState, sectionPrompt: <NotePrompt/>
    }
    });
  }


  function ShipInfo()
  {
    return(
    <>
    <label>
    First name
    </label>
    <input type="text" name="name" />

    <label>
    Last name
    </label>
    <input type="text" name="name" />

<br/>
    <label>
    Street address
    </label>
    <input type="text" name="name" />

    <br/>

    <label>
    City
    </label>
    <input type="text" name="name" />

    <label>Region</label>  
    <select name="formSelect" id="selectRegion">
    <option value="nAmerica">North America</option>
    <option value="sAmerica">South America</option>
    <option value="cAmerica">Central America</option>
  </select>

  <br/>

    <label>
    Postal code
    </label>
    <input type="text" name="name" />

  <label>Country</label>  
    <select name="formSelect" id="selectCountry">
    <option value="usa">The United States of Americs</option>
    <option value="can">Canada</option>
    <option value="mex">Mexico</option>
  </select>
    </>)
  }

  const [checked, setIsChecked] = useState(false);
  
  const handleOnChange = () => {
    setIsChecked(!checked);
  };

  return( <>
<div>
  
  <h1>Checkout</h1>
  <h2>Shipping information</h2>
  <div> {sectionPrompt} </div>
 
  <input type="checkbox" checked = {checked} onChange={handleOnChange}/>
        <label>Yes</label>
     
       {checked && ( <div>
          {giftHiddenCont}
        </div>)
}
<br/>
<button onClick = {setNotePrompt}>Proceed to next step</button>     
    </div>
  </>
  );
}

ReactDOM.render(<PNF />, document.getElementById('root'));