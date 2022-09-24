import React from "react";

const Transfer = ({item,model,tostore,amount, setAmount, setItem, setModel, setTostore, fromstore, setFromstore}) =>{
	return(
		<>
		<input type="text" name="item" required className="input-text" placeholder="Item name" value={item} onChange={(e)=>setItem(e.target.value)}/>
					<input type="text" name="model" required className="input-text" placeholder="Item model" value={model} onChange={(e)=>setModel(e.target.value)}/>
					<span>From : </span>
					<select name="store-location" required className="input-select" value={fromstore} onChange={(e)=>setFromstore(e.target.value)}>
						<option value="" disabled selected hidden required className="option">Choose a store</option>
						<option value="Sinchu-Store" className="option">Sinchu Store</option>
				        <option value="LK-store" className="option">LK Store</option>
				        <option value="Senegambia-shop" className="option">Senegambia Shop</option>
				        <option value="Kairaba-shop" className="option">Kairaba Shop</option>
				        <option value="Brusubi-shop" className="option">Brusubi Shop</option>
					</select>
					<span>To : </span>
					<select name="store-location" required className="input-select" value={tostore} onChange={(e)=>setTostore(e.target.value)}>
						<option value="" disabled selected hidden required className="option">Choose a store</option>
						<option value="Sinchu-Store" className="option">Sinchu Store</option>
				        <option value="LK-store" className="option">LK Store</option>
				        <option value="Senegambia-shop" className="option">Senegambia Shop</option>
				        <option value="Kairaba-shop" className="option">Kairaba Shop</option>
				        <option value="Brusubi-shop" className="option">Brusubi Shop</option>
					</select>
					<label>Amount:<input type="number" min="1" max="999" defaultValue="1" className="input-number" value={amount} onChange={(e)=>setAmount(e.target.value)}/></label>
					<input type="submit" className="input-button" value="transfer"/>
		</>
	)
}

export default Transfer