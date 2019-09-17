import React,{Component} from 'react';
import Homepage from './HomePage';
import SignUp from './SignUp';
import Login from './Login';
import AppNajdawe from'../Najdawe/AppNajdawe'
import AppMomani from'../Momani/AppMomani'
import Post from'../Momani/Post'
import AppTamimi from'../AppFood/AppTamimi'
import AppYoutube from'../AppYoutube/AppYoutube'
import Tips from '../Najdawe/Tips';
import OverWeight from '../Najdawe/Overweight';
import Normal from '../Najdawe/Normal';
import Obese from '../Najdawe/Obese';
import axios from 'axios';
import {BrowserRouter as Router,  Route,Link } from 'react-router-dom'




export default class App extends Component{
   state={
     datalogin:[],
     datasign:[]
   }

  SignUp=(name, email,password)=>{
    console.log(name)
    console.log(email)
    console.log(password)
    axios.post(`http://localhost:9000/Roaa/Sign/${email}/${password}/${name}`)
    .then(res=>{
      console.log(res)
     this.setState({
       datasign:[res.data]
     })
   
    }
    )
    .then( ()=>{
     
      if(this.state.datasign.length>0)
      
      window.location='/Login'
    
    else
    window.location='/SignUp'
  }
    )
   

    }
    
    Login=(input)=>{
     console.log(input)
      axios.post(`http://localhost:9000/Roaa/login`,input)
      .then(res=>{
        console.log(res.data)
        this.setState({datalogin:res.data})
      })
      
        .then( ()=>{
          if(this.state.datalogin.length>0)
          {
          window.location='/Homepage'
        }
        else
    window.location='/SignUp'
      
      }
        )
       
     
    }



  

  render(){
  return (
    <>
    
    <Router>
    <Route path="/" exact component={()=><Login Login={this.Login}/>} />
    <Route path="/HomePage"  component={()=><Homepage/>} />
  <Route path="/Login"  component={()=> <Login Login={this.Login}/>} />
  <Route path="/SignUp" component={()=> <SignUp SignUp={this.SignUp} /> }/>
  <Route path="/weigth" component={()=> <AppNajdawe/> }/>
  <Route path="/diet" component={()=> <AppMomani/> }/>
  <Route path="/post" component={()=> <Post/> }/>
  <Route path="/food" component={()=> <AppTamimi/> }/>
  <Route path="/video" component={()=> <AppYoutube/> }/>
  <Route path="/tips" component={Tips} />
   <Route path="/overweight" component={OverWeight}/>
    <Route path="/normal" component={Normal}/>
    <Route path="/obese" component={Obese}/>
        
  </Router>
 
    </>
  );
  
}
}

