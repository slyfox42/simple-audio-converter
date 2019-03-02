import './Main.scss'
import FileList from '../../molecules/FileList'
import FileSelect from '../../atoms/FileSelect'
import React from 'react'
// import convert from '../ffmpegScript'

const Main = () => {
  return (
    <div className="main-container">
      <div className="app-title">Audio Converter</div>
      <FileSelect />
      <FileList />
    </div>
  )
}

export default Main
