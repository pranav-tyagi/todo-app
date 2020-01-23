export const recordReducer=(initState={arr:[],sum:0},action)=>{
  
     if(action.type=='+'){
         var obj2=Object.assign({},action.payload.obj);
        initState.arr=initState.arr.concat(obj2);
        console.log("state is",initState.sum);
        console.log("amount is",action.payload.amount);
        var total=initState.sum+parseInt(action.payload.obj.amount);
        console.log("total is",total);
        return{...initState,sum:total};
        }
        if(action.type=='-'){
          const array = initState.arr.filter(item => item !== action.payload.obj);
          var t=initState.sum-parseInt(action.payload.obj.amount);
          return{...initState,arr:array,sum:t};
        }
        if(action.type=='÷'){
          
             if(action.payload.obj.paid=="no"){
               action.payload.obj.paid="yes";
               
             }
             else if(action.payload.obj.paid=="yes"){
               action.payload.obj.paid="no";
             }
         console.log("paid:",action.payload.obj);
        }
     return(initState);

}
