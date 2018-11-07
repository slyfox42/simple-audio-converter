import '../assets/css/App.css'
import React, { Component } from 'react'

class App extends Component {
  onChange = val => {
    console.log('value', val.value)
    console.log('files', val.target.files)
    console.log(val)
  }
  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>
        <p>
          I hope you enjoy using basic-electron-react-boilerplate to start your
          dev off right!
        </p>
        <input type="file" accept=".wav" onChange={this.onChange} />
      </div>
    )
  }
}

export default App
