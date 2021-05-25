import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ children }) => {
    return (
        <header className="header">{ children }</header>
    )
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;