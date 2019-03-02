import './ConvertButton.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../../atoms/Button'
import FileActions from '../../../state/actions/file-actions'
import PropTypes from 'prop-types'
import React from 'react'

const ConvertButton = ({ convertFiles, paths }) => {
  const onClick = () => {
    if (!paths.length) {
      return
    }
    convertFiles(paths)
  }

  return <Button onClick={onClick}>Convert files</Button>
}

ConvertButton.propTypes = {
  paths: PropTypes.array.isRequired,
  convertFiles: PropTypes.func.isRequired
}

export default connect(
  state => ({
    paths: state.files.paths
  }),
  dispatch => bindActionCreators(FileActions, dispatch)
)(ConvertButton)
