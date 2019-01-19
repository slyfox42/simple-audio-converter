import '../assets/css/App.css'
import Button from './atoms/Button'
import React, { Component } from 'react'

// test comment
class App extends Component {
  onChange = val => {
    console.log('files', val.target.files)
    console.log(val)
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello, Electron!</h1>
        <p>
          I hope you enjoy using basic-electron-react-boilerplate to start your
          dev off right!
        </p>
        <input type="file" accept=".wav" onChange={this.onChange} />
        <Button />
      </React.Fragment>
    )
  }
}

export default App
