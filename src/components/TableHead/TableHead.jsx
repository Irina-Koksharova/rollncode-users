import PropTypes from 'prop-types';
import './TableHead.scss';

const TableHead = ({ data }) => {
    return (
        <thead>
            <tr>
                {Object.values(data).map(columnHeader => (
                    <th
                        key={columnHeader}
                        className="table__head">
                        {columnHeader}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

TableHead.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
    
export default TableHead;