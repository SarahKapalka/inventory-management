import React from "react";

const Remove = ({item,model,fromstore,amount, setAmount, setItem, setModel, setFromstore}) =>{
    return(
        <>
        <input type="text" name="item" required className="input-text" placeholder="Item name"/>
        <input type="text" name="model" required className="input-text" placeholder="Item model"/>
        <select name="store-location" required className="input-select">
            <option value="" disabled selected hidden required className="option">Store to remove from</option>
            <option value="Sinchu-Store" className="option">Sinchu Store</option>
            <option value="LK-Store" className="option">LK Store</option>
        </select>
        <label>Amount:<input type="number" min="1" max="999" defaultValue="1" className="input-number"/></label>
        <input type="submit" className="input-button" value="remove"/>
        </>
    )
}

export default Remove