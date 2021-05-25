import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick, children, ...allyProps }) => {
  return (
    <button className="button" type="button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;
