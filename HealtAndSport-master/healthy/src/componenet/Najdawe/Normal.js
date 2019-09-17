import React, { Component } from 'react';
import Weight from './Weight';
import NavBar from '../Roaa/NavBar';
import Footer from '../Roaa/Footer';
class Normal extends Component {
  state = {
    hide: false
  }
  render(){
  
      return(
        <>
        <NavBar/>
        <div
        className="w3-modal-content w3-card-4 w3-animate-zoom" 
        style={{ display: this.state.hide ? 'none' : 'block',  width: "70%", position: 'absolute', top: '20%', left: '10%' }}>
        <div class="w3-container w3-light-white w3-padding">
          <button className="w3-button w3-right w3-white w3-border"
            onClick={() => { this.setState({ hide: true})}}>X</button>
        </div>
        <div className="w3-card-4"  >
          <header className="w3-container w3-green">
            <h1 style={{ fontFamily: 'Amaranth' }}>Normal Weight</h1>
          </header>

          <div className="w3-container" style={{ fontFamily: 'Amaranth',textAlign:"left" }}>
            <p>Normal Weight</p>
          <ul>
                <li>Eat three to five meals a day</li><br/>
                <li>Weight training</li><br/>
                <li>Eat enough protein</li><br/>
                <li>Eat meals with fibrous carbohydrates and healthful fats</li><br/>
           
              </ul>
            
          </div>

          <footer className="w3-container w3-green">
            <h5></h5>
          </footer>
        </div>
      </div>

<Weight/>
<Footer/> 
     </>   
      )
  }
}
export default Normal;