import React, { Component } from 'react';
import Weight from './Weight';
import NavBar from '../Roaa/NavBar';
import Footer from '../Roaa/Footer';
class Obese extends Component {
  state = {
    hide: false
  }


  render() {
    return (
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
          <header className="w3-container w3-red">
            <h1 style={{ fontFamily: 'Amaranth' }}>Obese</h1>
          </header>

          <div className="w3-container" style={{ fontFamily: 'Amaranth',textAlign:"left" }}>
            <p>Obesity is usually treated with lifestyle changes, including this advice diet and exercise.</p>
          <ul style={{ fontFamily: 'Amaranth',textAlign:"left" }}>
           
                <li>Dietary changes</li><br/>
                <li>Avoid crash-dieting</li><br/>
                <li>Physical activity</li><br/>
                <li>Weight-loss medications</li><br/>
                <li>Surgery</li><br/>
              </ul>
            
          </div>

          <footer className="w3-container w3-red">
            <h5></h5>
          </footer>
        </div>
      </div>
      <Weight/>
      <Footer/>
    
</>

    );
  }
}
export default Obese