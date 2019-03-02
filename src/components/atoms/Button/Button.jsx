import './Button.scss'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

export const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const TYPE_PROPS = {
  [BUTTON_SIZES.SMALL]: {
    class: 'small-button'
  },
  [BUTTON_SIZES.MEDIUM]: {
    class: 'medium-button'
  },
  [BUTTON_SIZES.LARGE]: {
    class: 'large-button'
  }
}

const Button = ({ children, onClick, appearance }) => {
  const classProps = classnames('button-base', TYPE_PROPS[appearance].class)
  console.log(classProps)
  return (
    <div className={classProps} onClick={onClick}>
      {children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf([
    BUTTON_SIZES.SMALL,
    BUTTON_SIZES.MEDIUM,
    BUTTON_SIZES.LARGE
  ]),
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: () => null,
  customClasses: [''],
  appearance: BUTTON_SIZES.MEDIUM
}

export default Button
