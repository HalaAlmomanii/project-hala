import React ,{Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default  class Navbar extends Component{
   
render(){
    return(
        <>


<div className="App" style={{fontFamily: 'Amaranth' ,color:'#00b339'}}>
       <div className="header"style={{position:'relative', overflow:"hidden",backgroundColor:" #f1f1f1",color:'green' }} >
       <a href="#default" class="logo"style={{
        fontWeight:"normal",textDecoration:"none", position:'absolute', top:'25%', left:'5%', fontSize:"20px",color:'#00b339'}} >Energy <img style={{maxWidth:'30px', maxHeight:'30px'}} src={require('../Assets/muscle.svg')}></img>Sports</a>
       <div className="header-right" style={{float:"right"}}>
       <a className="active "style={{float:"left",textAlign: "center",padding: "12px" , fontSize:"20px",textDecoration:"none",color:'#00b339'}} href="/HomePage">Home</a>
       <a href="/food" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>Recipes</a>
       <a href="/video" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>Videos</a>

       <a href="/weigth" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>Weight</a>
       <a href="/diet" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>Diet schedules</a>
       <a href="/post" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>Community</a>
       <a href="/Login" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>Logout</a>
       

     </div>
      </div>
      </div>
       
  
     
 
        </>
    );
}
}
