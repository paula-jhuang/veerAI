import React from 'react';
import './App.css';

class Currency extends React.Component {
   

  constructor(props) { 
    super(props);

    this.state = {
      conversionCad: '',
      conversionUsd: '',
      showBtn: true
    };
    
    this.displayCurrency = this.displayCurrency.bind(this);
  }



  displayCurrency(){
    fetch("https://api.exchangeratesapi.io/latest?symbols=CAD,USD", {mode: 'cors'})
    .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            conversionCad: result.rates.CAD,
            conversionUsd: result.rates.USD,
            showBtn: false
          })
        }
      )
  };

  conversionBtn(){
    return <button class="button" onClick={this.displayCurrency}>Check CAD to USD Exchange Rates</button>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.showBtn ? this.conversionBtn() : ''}
          
          {!this.state.showBtn ? 'The CAD currency exchange is ' + this.state.conversionCad : ''}
          <br/>
          {!this.state.showBtn ? 'The USD currency exchange is ' + this.state.conversionUsd : ''}
        </header>
      </div>
    );
    }
}
export default Currency;
