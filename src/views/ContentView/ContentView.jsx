import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ContentView.scss';
import usersSelectors from 'redux/users/users-selectors';
import usersOperations from 'redux/users/users-operation';
import Spinner from 'components/Spinner';
import Button from 'components/Button';
import Table from 'components/Table';

const Content = () => {
    const [page, setPage] = useState(1)
    const isLoading = useSelector(usersSelectors.getIsLoading);
    const users = useSelector(usersSelectors.getUsers)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersOperations.getAllUsers(page));
    }, [dispatch, page]);

    const onButtonLoadMoreClick = () => {
        setPage(page => page + 1)
    }
    
    return (
        <>
            {isLoading
                ? <Spinner />
                : <section className="users__section">
                    <div className="allUsers__container">
                        <Table users={users} />
                        <Button
                            onClick={onButtonLoadMoreClick}
                            aria-label="load more">
                            Load more
                        </Button>
                    </div>
                    <div className="markedUsers__container"></div>
                </section>}
        </>
    )
}
        
export default Content;