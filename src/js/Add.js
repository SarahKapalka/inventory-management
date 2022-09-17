import React from "react";

const Add = () =>{
    return(
    <>
    <input type="text" name="item" required className="input-text" placeholder="Item name"/>
    <input type="text" name="model" required className="input-text" placeholder="Item model"/>
    <select name="store-location" required className="input-select">
      <option value="" disabled selected hidden required className="option">Choose a store</option>
      <option value="store-one" className="option">store one</option>
      <option value="store-two" className="option">store two</option>
    </select>
    <label>Amount:<input type="number" min="1" max="999" defaultValue="1" className="input-number"/></label>
    <input type="submit" className="input-button"/>
    </>
    )
}

export default Add