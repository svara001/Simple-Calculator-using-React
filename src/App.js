import React from 'react';
import './App.css';
import KeyPadComponent from './KeyPadComponent.js';
import ResultComponent from './ResultComponent.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      result:""
    }
  }


  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "" ) + ""
    })

    }
    catch(e) {
      this.setState({
        result: "error"
    })
    }
  }

  reset = () => {
    this.setState({
        result: ""
    })
};
  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
  };

  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};

  render() {
    return (
    <div>
      <div className="calculator-body">
            <h1>Simple Calculator</h1>
            <ResultComponent result={this.state.result}/>
            <KeyPadComponent onClick={this.onClick}/>
        </div>
    </div>
    );
  }
}

export default App;
