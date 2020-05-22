import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) { 
    super(props);

    this.state = {
      apiRes: '',
      userInput: ''
    };
    
    this.validate = this.validate.bind(this);
    this.storeData = this.storeData.bind(this);
  }

  validate(){
    fetch("http://localhost:4000/check?checkParam=" + encodeURIComponent(this.state.userInput), {mode: 'cors'})
      .then(res => res.json())
      .then(
        (result) => {
          let displayString = '';
          if (result == true) {
            displayString = 'Correct. You entered Foo or Bar.';
          }else {
            displayString = 'Wrong entry. Please try again.';
          }
          this.setState({
            apiRes: displayString
          });
        }
      )
  };

  storeData(e){
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Veer AI Assignment</h1>
          <h2>Enter 'Foo' or 'Bar' for validation.</h2>
          <input type="text" onChange={this.storeData}></input>
          <br></br>
          <button class="button" onClick={this.validate}>Submit</button>
          <br></br>
          {this.state.apiRes}
        </header>
      </div>
    );
    }
}
export default App;
