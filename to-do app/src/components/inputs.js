import React from 'react';
export const Input=(props)=>{
   
    return(
        <>
        
        <div className="main-page">
            <h1 class="login-heading">Todo App</h1>
        <input onChange={props.takeinput} placeholder="Category" type="text" id="cat" />
        <input onChange={props.takeinput} placeholder="Description" type="text" id="desc" />

        <input onChange={props.takeinput} placeholder="Amount" type="number" id="amount" />
        <button onClick={props.add} className="btn btn-primary my-btn" >Add</button>
        </div></>
        )
}