const getUsers = state => state.users.allUsers;
const getIsLoading = state => state.users.isLoading;

const usersSelectors = { getUsers, getIsLoading }

export default usersSelectors;