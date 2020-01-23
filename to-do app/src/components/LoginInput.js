import React from 'react';
export const LoginInput=(props)=>{
    return(
        <>
      
    <h1 class="login-heading">Todo App</h1>

        <div className="container login-container">
            <div className="row">
                <div className="col-md-4"></div>
        <div className="col-md-4">
        <div class="card">
  <div class="card-body login-card">
      <h3>Login Page</h3>
      <br/> 
      <div>
          <label>User Id:</label>
  <input onChange={props.inp} type="text" id="userid"placeholder="enter userid"/></div>
  <br/>
        <div>
        <label> Password:</label>
            <input onChange={props.inp} type="password" id="password"placeholder="enter password"/>
        </div>
        <br/>
        <button className="btn btn-primary" onClick={()=>{props.check();
                              console.log("button calls"); }    }>Submit</button>
   
  </div>
</div>
</div>
<div className="col-md-4"></div>
</div>
</div>
        
        </>
        );
}