import PropTypes from 'prop-types';
import './TableTitle.scss';

const TableTitle = ({ title }) => {
    return (
        <caption className="table__title">{title}</caption>
    )
}

TableTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TableTitle;