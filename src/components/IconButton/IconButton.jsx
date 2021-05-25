import PropTypes from 'prop-types';
import { useState } from 'react';
import './IconButton.scss';

const IconButton = ({ children = null, ...allyProps }) => {
  const [isChecked, setIsChecked] = useState(false)

   const onClick = (e) => {
        if (e.target.tagName === 'svg') {
            setIsChecked(!isChecked)
        }
    }

  return (
    <button
      className={isChecked ? "icon__button checked" : "icon__button"}
      onClick={onClick}
      {...allyProps}>
      {children}
    </button>
  )
};


IconButton.propTypes = {
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;