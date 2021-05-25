import PropTypes from 'prop-types';
import shortid from 'shortid';
import { GiCheckMark } from 'react-icons/gi';
import './TableBody.scss';
import IconButton from 'components/IconButton';

const TableBody = ({ users }) => {
    
    const getUserId = (id) => {
        return id.value ? id.value : shortid.generate()
    }

    return (
        <>
            {users.map(({ login, id, name, picture  }) => (
                <tr key={`${login.uuid}${picture.medium}`}>
                    <td className="table__data">
                        <img src={picture.medium} alt={`${name.first} ${name.last}`} />
                    </td>
                    <td className="table__data">
                        <p>{getUserId(id)}</p>
                    </td>
                    <td className="table__data">
                        <p>{`${name.first}`}</p>
                    </td>
                    <td className="table__data">
                        <p>{`${name.last}`}</p>
                    </td>
                    <td className="table__data">
                        <IconButton aria-label="check">
                            <GiCheckMark size={'1.5em'}/>
                        </IconButton>
                    </td>
                </tr>
            ))}
        </>
    )
}

TableBody.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
            
export default TableBody;