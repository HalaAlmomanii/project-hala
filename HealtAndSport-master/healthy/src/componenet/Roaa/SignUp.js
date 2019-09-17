import React,{Component} from 'react';


export default class SignUp extends Component{
 state={
      name:'',
      email:'',
      password:'',
      validation: {
        name: /^[a-zA-Z]{3,}$/,
        email:/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/,
        password: /^[a-zA-Z0-9]{5,15}$/,
       
      },
      isValidname: false,
      isValidemail: false,
      isValidpassword: false,
      

 }
    SignUp=(e)=>{
      this.setState({
        [e.target.name]: e.target.value,
        [`isValid${e.target.name}`]: this.state.validation[e.target.name].test(e.target.value)
      })
  
    console.log(e.target.name)
    console.log(e.target.value)
      
    }
  
  render(){
  return (
    <>
   <div  id="log" style={{height:"100vh"}}>
  
    <form style={{margin: "7% 10% 5% 37%",padding:"36px",borderRadius:"10px",fontFamily:' Amaranth' ,fontSize:'20px',width:"100%",border:"2px solid" ,width: "30%",float:"left" }}>
  <div className="form-group">
  <h1 style={{textAlign:'center',color:"green",display:"block" ,fontFamily:' Amaranth'}}>SignUp</h1>
    <label forhtml="exampleInputEmail1"style={{color:"green",display:"block",fontFamily:' Amaranth' }}>Email</label>
    <input type="email"name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" onChange={this.SignUp}/>
    {/* <small style={{margin:"-32px",padding:"28px",fontSize:"12px",fontFamily:' Amaranth'}} id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label style={{color:"green",display:"block" ,fontFamily:' Amaranth'}}forhtml="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" pattern="[a-zA-Z0-9]{5}"  title=" at least five digits" placeholder="Your Password" name="password" onChange={this.SignUp}/>
  </div>
  <div className="form-group">
    <label style={{color:"green",display:"block",fontFamily:' Amaranth',width:"200px"}} forhtml="exampleInputName" >Name</label>
    <input type="text" className="form-control" pattern="[a-zA-Z0-9]{3,}" title=" at least three digits" id="exampleInputName"  name="name" placeholder="Your Name" onChange={this.SignUp}/>
  </div>
 
  <button  onClick={

             this.state.isValidname &&
               this.state.isValidemail &&
               this.state.isValidpassword
               ?
               this.props.SignUp.bind(
                 this,
                 this.state.name,
                
                 this.state.email,
                 this.state.password,
               
               ) : ""} type="submit" className="btn btn-success"style={{width:"200px"}}>Submit</button>

<br></br>
<a href="/Login"style={{textAlign: "center",color:"#000080",margin:"-60px"}}>Already a member</a>
</form> 
 
</div>

</>
  );  
}
}


   
  
