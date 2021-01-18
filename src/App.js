import React, { Component } from 'react'

import './App.css';
import Char from './components/char'
import Validation from './components/validationComponent'


class App extends Component {

  state = {
    userInput: ''
  }

  inputHandler = (event) =>{
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({userInput: updatedText})
  }


    render () {
      const charList = this.state.userInput.split('').map((ch, index) => {
        return <Char 
                  character={ch} 
                  key={index}
                  clicked={() => this.deleteCharHandler(index)}/>
      })
      return (
      
        <div className="App">
          <input 
            type="text" 
            value={this.state.userInput} 
            onChange={this.inputHandler} /> 

            <hr></hr>

            <p>{this.state.userInput}</p>

            <Validation inputLength={this.state.userInput.length} />

            {charList}
        
        </div>
      )
    }

}

export default App

