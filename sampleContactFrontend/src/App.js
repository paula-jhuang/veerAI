import React from 'react';
import './App.css';

class App extends React.Component {
  

  constructor(props) { 
    super(props);

    this.state = {
      apiRes: '',
      email: '',
      phonenum: '',
      conversionCad: '',
      conversionUsd: '',
      showBtn: true
    };
    
    this.validate = this.validate.bind(this);
    this.storeEmail = this.storeEmail.bind(this);
    this.storePhone = this.storePhone.bind(this);
    this.displayCurrency = this.displayCurrency.bind(this);
  }

  validate(){
    fetch("http://localhost:5000/validate?email=" + encodeURIComponent(this.state.email) + "&phone=" + encodeURIComponent(this.state.phonenum), {mode: 'cors'})
      .then(res => res.json())
      .then(
        (result) => {
          let displayString = '';
          if (result === true) {
            displayString = 'Thank you for your submission.';
          }else {
            displayString = 'Please fill in the fields.';
          }
          this.setState({
            apiRes: displayString
          });
        }
      )
  };

  storeEmail(e){
    this.setState({
      email: e.target.value
    });
  }

  storePhone(e){
    this.setState({
      phonenum: e.target.value
    });
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
          <h1>Veer AI Assignment</h1>
          <h2>Enter contact info</h2>
          Enter email:<input type="email" id="email" onChange={this.storeEmail}></input>
          <br></br>
          Enter phone:<input type="text" id="phone" onChange={this.storePhone}></input>
          <br></br>
          <button class="button" onClick={this.validate}>Submit</button>
          <br></br>
          {this.state.apiRes}
          {this.state.showBtn ? this.conversionBtn() : ''}
          
          {!this.state.showBtn ? 'The CAD currency exchange is ' + this.state.conversionCad : ''}
          <br/>
          {!this.state.showBtn ? 'The USD currency exchange is ' + this.state.conversionUsd : ''}
        </header>
      </div>
    );
    }
}
export default App;
