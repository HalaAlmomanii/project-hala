import React, { Component } from 'react';
import axios from 'axios'
import NavBar from '../Roaa/NavBar';
import Footer from '../Roaa/Footer';
import Card from './Card'
import SearchBar from './SearchBar';
import Video from './Video';

export class AppTamimi extends Component {

    state = {

        videos:""
            
            }

    find=(title)=>{
    // console.log(title.length)
        let t=`${title} "workout exercies"`
    if(title.length>0){

        axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${t}
            &type=video&key=AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s
        `           )
    
                .then ( res  =>  {
                
                    this.setState({
    
                     videos: res.data.items
    
                                })
    
                }
    
             )
        
    }
      }

    

    render() {

        return (
            <>
            <NavBar/>

            <div class="container">
            <div class="container-fluid">
            <div class="row">
                <SearchBar find = { this.find }/>

               { this.state.videos.length === 0 && <Card/> }
               { this.state.videos.length > 0 && this.state.videos.map ( ( elem, index ) => <Video vid= { elem } key = { index } />)} 
                
                
            </div>
            </div>
            </div>
            <Footer/>
            </>
        )
    }
}

export default AppTamimi