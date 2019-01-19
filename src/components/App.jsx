import '../assets/css/App.css'
import Button from './atoms/Button'
import React, { Component } from 'react'

// test comment
class App extends Component {
  onChange = e => {
    console.log('files', e.target.files)
    const fileList = Object.keys(obj).map(key => obj[key])
  }
  render() {
    return (
      <React.Fragment>
        <input type="file" accept=".wav" onChange={this.onChange} />
        <Button>Click Me!</Button>
      </React.Fragment>
    )
  }
}

export default App
