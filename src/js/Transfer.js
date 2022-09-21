import React from "react";

const Transfer = () =>{
	return(
		<>
		<input type="text" name="item" required className="input-text" placeholder="Item name"/>
					<input type="text" name="model" required className="input-text" placeholder="Item model"/>
					<span>From : </span>
					<select name="store-location" required className="input-select">
						<option value="" disabled selected hidden required className="option">Choose a store</option>
						<option value="Main-Store" className="option">Sinchu Store</option>
				        <option value="LK-store" className="option">LK Store</option>
				        <option value="Sene-shop" className="option">Senegambia Shop</option>
				        <option value="Kairaba-shop" className="option">Kairaba Shop</option>
				        <option value="Brusubi-shop" className="option">Brusubi Shop</option>
					</select>
					<span>To : </span>
					<select name="store-location" required className="input-select">
						<option value="" disabled selected hidden required className="option">Choose a store</option>
						<option value="Main-Store" className="option">Sinchu Store</option>
				        <option value="LK-store" className="option">LK Store</option>
				        <option value="Sene-shop" className="option">Senegambia Shop</option>
				        <option value="Kairaba-shop" className="option">Kairaba Shop</option>
				        <option value="Brusubi-shop" className="option">Brusubi Shop</option>
					</select>
					<label>Amount:<input type="number" min="1" max="999" defaultValue="1" className="input-number"/></label>
					<input type="submit" className="input-button" value="transfer"/>
		</>
	)
}

export default Transfer