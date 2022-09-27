import React from "react";
import { useState } from "react";

import Add from "./Add";
import Transfer from "./Transfer";
import Remove from "./remove";
import Search from "./Search";

const Main = () =>{
    const [page, setpage] = useState("main") ;
    const [item, setItem] = useState("");
    const [model, setModel] = useState("");
    const [tostore, setTostore] = useState("");
    const [fromstore, setFromstore] = useState("");
    const [amount, setAmount] =useState(1);
    
    const handleSubmit=(e)=>{
       e.preventDefault()
       switch(page){
        case "add":
            return console.log(`Have added ${amount} ${item}(s) of model ${model} to ${tostore}`)
        case "transfer":
            return console.log(`Have transfered ${amount} ${item}(s) of model ${model} from ${fromstore} to ${tostore}`)
        case "remove":
            return console.log(`Have removed ${amount} ${item}(s) of model ${model} from ${fromstore}`)

       }
    }

    switch(page){
        case "main":
            return (
            <div id='main-menu'>
                <button className='main-button' onClick={()=>{setpage("search")}}>search for an item</button>
                <button className='main-button' onClick={()=>{setpage("add")}}>add to store</button>
                <button className='main-button' onClick={()=>{setpage("transfer")}}>transfer to shop</button>
                <button className='main-button' onClick={()=>{setpage("remove")}}>remove from store</button>
            </div>
            )
        case "add":
            return (
                <div className="form">
                <form action="#" onSubmit={handleSubmit}>
                    <Add item={item} model={model} tostore={tostore} amount={amount} setItem={setItem} setModel={setModel} setTostore={setTostore} setAmount={setAmount}/>
                    <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
                </form>
                </div>
        )
        case "transfer":
            return (
                <div className="form">
                <form action="#" onSubmit={handleSubmit}>
                    <Transfer item={item} model={model} tostore={tostore} amount={amount} setItem={setItem} setModel={setModel} setTostore={setTostore} setAmount={setAmount} fromstore={fromstore} setFromstore={setFromstore}/>
                    <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
                </form>
            </div>)
        case "remove":
            return (
            <div className="form">
                <form action="#" onSubmit={handleSubmit}>
                <Remove item={item} model={model} fromstore={fromstore} amount={amount} setItem={setItem} setModel={setModel} setFromstore={setFromstore} setAmount={setAmount}/>
                <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
                </form>
            </div>
            )
        case "search":
            return (
            <div className="form">
                <Search/>
                <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
            </div>
            )
        default:
            null
    }
}

export default Main