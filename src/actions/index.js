const usersRequest = () => {
  return{
    type: 'FETCH_USERS_REQUEST'
  }
};

const usersLoaded = (users) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: users
  }
};

const usersError = (error) => {
  return {
    type: 'FETCH_USERS_FAILURE',
    payload: error
  }
};

export {
  usersRequest,
  usersLoaded,
  usersError
}