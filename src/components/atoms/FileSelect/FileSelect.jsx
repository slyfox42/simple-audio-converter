import './FileSelect.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../Button'
import FileActions from '../../../state/actions/file-actions'
import PropTypes from 'prop-types'
import React from 'react'

const FileSelect = props => {
  console.log(props)
  const onChange = e => {
    const files = e.target.files
    props.fileAdd(files[0].path)
  }

  return (
    <React.Fragment>
      <input
        type="file"
        id="files"
        accept=".wav,.flac,.mp3"
        title="wewewe"
        onChange={onChange}
      />
      <Button>
        <label htmlFor="files">Select file</label>
      </Button>
    </React.Fragment>
  )
}

FileSelect.propTypes = {
  fileAdd: PropTypes.func.isRequired
}

export default connect(
  state => ({
    paths: state.files.paths
  }),
  dispatch => bindActionCreators(FileActions, dispatch)
)(FileSelect)
