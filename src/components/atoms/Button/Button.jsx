import './Button.scss'
import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <div className="button-base" onClick={onClick}>
      {children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: () => null
}

export default Button
