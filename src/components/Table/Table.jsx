import './Table.scss';
import userData from 'initial/user-data';
import TableTitle from 'components/TableTitle';
import TableHead from 'components/TableHead';
import InputRow from 'components/InputRow';
import TableBody from 'components/TableBody';

const Table = ({ users }) => {

    return (
        <>
            { users.length > 0 &&
                <table className="table">
                <TableTitle title='List of all users' />
                <TableHead data={userData} />
                <tbody>
                    <InputRow/>
                    <TableBody users={users} />
                </tbody>
                </table>
            }
        </>
    )
}
                
export default Table;