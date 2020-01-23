import React from "react";
import {connect} from "react-redux";
import './style.css';
const Output =(props)=>{
    return(
        <div className="main-page">
           
            
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <h3>Result is {props.result.sum}</h3>
           <table className='mytable'>
               <thead>
                   <tr>
                       <th>Paid</th>
                   <th>Category</th>
                   <th>Description</th>
                   <th>Amount</th>
                   <th>Operations</th>
                   </tr>
               </thead>
            {props.result.arr.map((person, index) => (
               <tbody> 
        <tr key={index}>
            <td><input type="checkbox" onClick={()=>{props.paid(person);
                                                    console.log("checkkkkk")}}/></td>
            <td>{person.cat}</td>
            <td>{person.desc}</td>
            <td>{person.amount}</td>
            <td><button className="btn btn-primary my-btn" onClick={()=>{props.edit(person);
                              console.log("button calls");
                              }}>Edit</button ><button className="btn btn-primary my-btn">Delete</button></td>
        </tr>
        </tbody>
        
    ))}
           </table>
           </div>
           <div className="col-md-2"></div>
           </div>
           </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    
    console.log("map to props array is",state.arr);
    return {
        result:state
 
    };
}
const fn = connect(mapStateToProps);
export default fn(Output);