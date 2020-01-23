import React from 'react';
export const EditItem=(props)=>{
    console.log("aaaaa",props.item);
   
return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
            <h1 className="login-heading">Todo App</h1>
            <h3 className="edit-heading">Edit Page</h3>
            <div>
            <label>Category:</label>
        <input onChange={props.takeinput} placeholder="Category" type="text" id="cat" defaultValue={props.item.cat}/>
        </div>
        <div>
            <label>Description:</label>
        <input onChange={props.takeinput} placeholder="Description" type="text" id="desc" defaultValue={props.item.desc}/>
        </div>
        <div>
            <label>Amount:</label>
        <input onChange={props.takeinput} placeholder="Amount" type="number" id="amount" defaultValue={props.item.amount}/>
        </div>
        <button className="btn btn-primary my-btn" onClick={()=>{
            props.add();
            props.retry();
            
        }}>Update</button>
        </div>
        <div className="col-md-3"></div>
        </div>
        </div>
        
        </div>);
}
