import React from 'react';
import PropTypes from "prop-types";
import './Button.scss';

const Button = ({ onClick, customClassName, children, disabled, datacy, title, type }) => {
  return (
    <button
      data-testid="button"
      data-cy={datacy}
      disabled={disabled}
      onClick={onClick}
      className={`btn
        ${customClassName ? customClassName : 'btn-primary'}
        ${type == 'rounded' ? 'rounded' : 'border-r-1' }
      `}
    >
      {title || children}
    </button>
  )
}

Button.propTypes = {
  datacy: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  customClassName: PropTypes.string,
  children: PropTypes.element,
  title: PropTypes.string,
  type:  PropTypes.oneOf(['rounded', 'default'])
}

Button.defaultProps = {
  datacy: '',
  title: '',
  type: 'default',
  disabled: false
}

export default Button;