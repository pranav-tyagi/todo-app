import React from 'react';
import {Input} from './components/inputs';
import  Output  from './components/output';
import {store} from './models/store';
import './App.css';
import {LoginInput} from './components/LoginInput';
import { recordAddAction } from './models/actioncreators/recordAddAction';
import { EditItem} from './components/editItem';



export class App extends React.Component{
constructor(props){
  super();
  this.obj={
                userid:"",
               password:"",
              cat:"",
            desc:"",
          amount:"",
        paid:"no"};
  this.item={};
  this.state={
    view:'0',
  }

}
 paid(it){
   console.log("i am paid",it);
  let action=recordAddAction(it,'÷');
  store.dispatch(action);
              
 }

takeInput(event){
  var val = event.target.value;
  var key = event.target.id;
  for(let k in this.obj){
  if(key===k){
    this.obj[k] = val;}}
}
addRecord(){
  let action=recordAddAction(this.obj,'+')
  store.dispatch(action);
}

edit(it){
  console.log("it is",it);
  this.item=it;
  
  let action=recordAddAction(it,'-');
  store.dispatch(action);
  
  this.setState({view:'3'});
}

check(){
  var flag=0;
 
  console.log("i am in login");
  if(this.obj.userid===this.obj.password){
      console.log("i am in login2");
     this.setState({view:"1"});
     flag=1;
  }
  
  if(flag===0){
      console.log("noooooo");
      this.setState({view:"2"});

  }
}
retry(){
  console.log("retry");
  this.setState({view:"0"});
}
default(){
  console.log("retry");
  this.setState({view:"1"});
}


render(){
  const viewSwitch = () => {
            
    switch(this.state.view) {

      case "0":   return (<>
      <LoginInput inp={this.takeInput.bind(this)} check={this.check.bind(this)}/></>);
      case "1":  return (<div>
        <Input takeinput={this.takeInput.bind(this)} add={this.addRecord.bind(this)}/>
       <Output edit={this.edit.bind(this)} paid={this.paid.bind(this)}/>
     </div>);
      case "2":  return (<><h1>wrong password</h1>
        <button onClick={this.retry.bind(this)}>Retry</button>   </>);
        case '3':return(<><EditItem takeinput={this.takeInput.bind(this)} 
        add={this.addRecord.bind(this)}  item={this.item} retry={this.default.bind(this)}/>
                         </>)
     default:      return <h1>No project match</h1>
    }
  }
  return (
    <div>{viewSwitch()}</div>
  )
}
}

