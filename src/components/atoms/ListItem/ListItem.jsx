import './ListItem.scss'
import PropTypes from 'prop-types'
import React from 'react'

const ListItem = ({ children }) => {
  return <div className="list-item">{children}</div>
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired
}

export default ListItem
