import './FileList.scss'
import { connect } from 'react-redux'
import Button from '../../atoms/Button'
import ListItem from '../../atoms/ListItem'
import PropTypes from 'prop-types'
import React from 'react'
import conversionScript from '../../../ffmpegScript'
import path from 'path'

const FileList = ({ paths }) => {
  const items = paths.map(filePath => {
    const { base } = path.parse(filePath)
    return <ListItem key={filePath}>{base}</ListItem>
  })

  const onClick = () => {
    if (!paths.length) {
      return
    }
    paths.map(filePath => conversionScript(filePath))
  }

  return (
    <div className="list-wrapper">
      <div className="path-list-title">Chosen files:</div>
      <div className="path-list-container">
        <ul className="path-list">{items}</ul>
      </div>
      <Button onClick={onClick}>Convert files</Button>
    </div>
  )
}

FileList.propTypes = {
  paths: PropTypes.array.isRequired
}

export default connect(state => ({
  paths: state.files.paths
}))(FileList)
