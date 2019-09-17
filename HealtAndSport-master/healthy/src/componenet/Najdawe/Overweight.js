import React, { Component } from 'react';
import Weight from './Weight';
import NavBar from '../Roaa/NavBar';
import Footer from '../Roaa/Footer';

class OverWeight extends Component {
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
        <div className="w3-container w3-light-grey w3-padding">
          <button className="w3-button w3-right w3-white w3-border"
            onClick={() => { this.setState({ hide: true})}}>X</button>
        </div>
        <div className="w3-card-4"  >
          <header className="w3-container w3-orange">
            <h1 style={{ fontFamily: 'Amaranth' }}>Over Weight</h1>
          </header>

          <div className="w3-container" style={{ fontFamily: 'Amaranth',textAlign:"left" }}>
            <p>Tips to lose weight even faster</p>
          <ul style={{ fontFamily: 'Amaranth',textAlign:"left" }}>
                <li><b>Eat a high-protein breakfast:</b> Eating a high-protein breakfast has been shown to reduce cravings and calorie intake throughout the day .</li> <br/>
                <li><b>Avoid sugary drinks and fruit juice: </b>These are the most fattening things you can put into your body, and avoiding them can help you lose weight.</li> <br/>
                <li><b>Drink water a half hour before meals: </b>One study showed that drinking water a half hour before meals increased weight loss by 44% over 3 months .</li> <br/>
                <li><b>Choose weight loss-friendly foods: </b> Certain foods are very useful for losing fat. Here is a list of the 20 most weight loss-friendly foods on earth.</li> <br/>
                <li><b>Eat soluble fiber:</b> Studies show that soluble fibers may reduce fat, especially in the belly area. Fiber supplements like glucomannan can also help .</li> <br/>
               
              </ul>
            
          </div>

          <footer className="w3-container w3-orange">
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
export default OverWeight;