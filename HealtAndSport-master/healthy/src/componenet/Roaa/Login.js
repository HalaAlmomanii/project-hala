import React,{Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component{
 
state={
    email:'',
    password:''
}
  
 Login=(input)=>{
  console.log(input.target.name);
  console.log(input.target.value);
    this.setState({
      
        [input.target.name]: input.target.value
    })
  //   console.log(input.target.value);
  //   console.log(input.target.name);

  }
  render(){
  return (
    <>
       {/* <img style={{maxWidth:'100px', maxHeight:'100px',   padding: "70px 0px", textAlign: "center" }} src={require('../Assets/facebook.svg')}></img> */}
{/*        
       <div id="log" style={{height:"100vh"}} >
        

         <div className="col-6 col-sm-3"  style={{margin: "7% 10% 5% 42%",padding:"80px",borderRadius:"10px",fontFamily:' Amaranth' ,fontSize:'20px',width:"100%",border:"2px solid" ,width: "30%",float:"left" }}>
        <div className="form-group" style={{color:"green",width:'200px',margin: '-43px'}}> 
        <h1 style={{textAlign:'center',color:"green",display:"block" ,fontFamily:' Amaranth'}}>Login</h1> 
        <label for="exampleInputEmail1"style={{color:"green",display:"block" }}>  Email:
             <input className="form-control"id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter your name"  name="email" onChange={this.Login}/>
        </label>
        </div>
        <div className="form-group">
        <label for="exampleInputPassword1" style={{color:"green",display:"block",margin: "-43px" ,width: "196px",paddingBottom:"60px",paddingTop:"41px"}}>  password:
               <input type="password"className="form-control" id="exampleInputPassword1" placeholder="password" name="password" onChange={this.Login}/>
       </label>
       </div>
      <button  className="btn btn-success " style={{width:"200px",margin:"-50px"}} onClick={this.props.Login.bind(this,this.state)}>Login</button>
       <div>
         <a href="/SignUp"style={{textAlign: "center",color:"#000080",margin:"-60px"}}>Create an Account.....</a>
      </div>
      </div>
      </div>  */}

<div  id="log" style={{height:"100vh"}}>
  
  <form style={{margin: "7% 10% 5% 37%",padding:"36px",borderRadius:"10px",fontFamily:' Amaranth' ,fontSize:'20px',width:"100%",border:"2px solid" ,width: "30%",float:"left" }}>
<div className="form-group">
<h1 style={{textAlign:'center',color:"green",display:"block" ,fontFamily:' Amaranth'}}>Login</h1>
  <label forhtml="exampleInputEmail1"style={{color:"green",display:"block",fontFamily:' Amaranth' }}>Email:</label>
  <input type="email"name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.Login}/>
  {/* <small style={{margin:"-32px",padding:"28px",fontSize:"12px",fontFamily:' Amaranth'}} id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
</div>
<div className="form-group">
  <label style={{color:"green",display:"block" ,fontFamily:' Amaranth'}}forhtml="exampleInputPassword1">Password:</label>
  <input type="password" className="form-control" id="exampleInputPassword1" pattern="[a-zA-Z0-9]{5}" title=" at least five digits" placeholder="Password" name="password" onChange={this.Login}/>
</div>


{/* <button  onClick={this.props.Login.bind(this,this.state)} type="submit" className="btn btn-success"style={{width:"200px"}}>Login</button> */}

<div>
<button  onClick={this.props.Login.bind(this,this.state)}  className="btn btn-success"style={{width:"200px"}}>Login</button>
       <br></br>  <a href="/SignUp"style={{textAlign: "center",color:"#000080",margin:"-60px"}}>Create an Account.....</a>
      </div>
      </form>



</div>





    </>
  );
  
}
}

