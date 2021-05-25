import PropTypes from 'prop-types';
import './Main.scss';

const Main = ({ children }) => {
    return (
        <main className='container'>{children}</main>
    )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;