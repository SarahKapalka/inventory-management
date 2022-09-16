import React from "react";
import { useState } from "react";



const Main = () =>{
    const [page, setpage] = useState("main") ;
    console.log(page)
    switch(page){
        case "main":
            return (
            <div id='main-menu'>
                <button className='main-button' onClick={()=>{setpage("search")}}>search for store</button>
                <button className='main-button' onClick={()=>{setpage("add")}}>add to store</button> 
                <button className='main-button' onClick={()=>{setpage("transfer")}}>transfer between stores</button> 
                <button className='main-button' onClick={()=>{setpage("remove")}}>remove from store</button>     
            </div>
            )
        case "add":
            return (
            <div className="form">
            <form action="#">
                <input type="text" name="item" required className="input-text" placeholder="Item name"/>
                <input type="text" name="model" required className="input-text" placeholder="Item model"/>
                <select name="store-location" required className="input-select">
                 <option value="" disabled selected hidden required className="option">Choose a store</option>
                 <option value="store-one" className="option">store one</option>
                 <option value="store-two" className="option">store two</option>
                </select>
                <label>Amount:<input type="number" min="1" max="999" defaultValue="1" className="input-number"/></label>
                <input type="submit" className="input-button"/>
                <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
            </form>
            </div>
        )
        case "transfer":
            return (
                <div className="form">
                <form action="#">
                    <input type="text" name="item" required className="input-text" placeholder="Item name"/>
                    <input type="text" name="model" required className="input-text" placeholder="Item model"/>
                    <p>From :</p>
                    <select name="store-location" required className="input-select">
                     <option value="" disabled selected hidden required className="option">Choose a store</option>
                     <option value="store-one" className="option">store one</option>
                     <option value="store-two" className="option">store two</option>
                    </select>
                    <p>To :</p>
                    <select name="store-location" required className="input-select">
                     <option value="" disabled selected hidden required className="option">Choose a store</option>
                     <option value="store-one" className="option">store one</option>
                     <option value="store-two" className="option">store two</option>
                    </select>
                    <label>Amount:<input type="number" min="1" max="999" defaultValue="1" className="input-number"/></label>
                    <input type="submit" className="input-button" value="transfer"/>
                    <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
                </form>
            </div>)
        case "remove":
            return (
            <div className="form">
                <form action="#">
                <input type="text" name="item" required className="input-text" placeholder="Item name"/>
                <input type="text" name="model" required className="input-text" placeholder="Item model"/>
                <select name="store-location" required className="input-select">
                 <option value="" disabled selected hidden required className="option">Store to remove from</option>
                 <option value="store-one" className="option">store one</option>
                 <option value="store-two" className="option">store two</option>
                </select>
                <label>Amount:<input type="number" min="1" max="999" defaultValue="1" className="input-number"/></label>
                <input type="submit" className="input-button" value="remove"/>
                <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
                </form>
            </div>
            )
        case "search":
            return (
            <div className="form">
                <input type="text" name="search" required className="input-text" placeholder="search for item"/>
                    <button className="input-search">Search</button>
                <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
            </div>
            )
        default:
            null
    }
}

export default Main