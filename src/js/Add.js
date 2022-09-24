import React from "react";

const Add = ({item,model,tostore,amount, setAmount, setItem, setModel, setTostore}) =>{
    return(
    <>
    <input type="text" name="item" required className="input-text" placeholder="Item name" value={item} onChange={(e)=>setItem(e.target.value)}/>
    <input type="text" name="model" required className="input-text" placeholder="Item model" value={model} onChange={(e)=>setModel(e.target.value)}/>
    <select name="store-location" required className="input-select" value={tostore} onChange={(e)=>setTostore(e.target.value)}>
      <option value="" disabled selected hidden required className="option">Choose a store</option>
      <option value="Sinchu Store" className="option">Sinchu Store </option>
      <option value="LK Store" className="option">LK Store </option>
    </select>
    <label>Amount:<input type="number" min="1" max="999" className="input-number" value={amount} onChange={(e)=>setAmount(e.target.value)}/></label>
    <input type="submit" className="input-button"/>
    </>
    )
}

export default Add