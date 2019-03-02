import './FileList.scss'
import { connect } from 'react-redux'
import ConvertButton from '../../atoms/ConvertButton'
import ListItem from '../../atoms/ListItem'
import PropTypes from 'prop-types'
import React from 'react'
import path from 'path'

const FileList = ({ paths }) => {
  const items = paths.map(filePath => {
    const { base } = path.parse(filePath)
    return <ListItem key={filePath}>{base}</ListItem>
  })

  return (
    <div className="list-wrapper">
      <div className="path-list-title">Chosen files:</div>
      <div className="path-list-container">
        <ul className="path-list">{items}</ul>
      </div>
      <ConvertButton />
    </div>
  )
}

FileList.propTypes = {
  paths: PropTypes.array.isRequired
}

export default connect(state => ({
  paths: state.files.paths
}))(FileList)
