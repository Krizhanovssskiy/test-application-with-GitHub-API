const initialState = {
  users: [],
  error: null,
  loading: true
};

const reducers = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'FETCH_USERS_SUCCESS':
      return {
        loading: false,
        error: null,
        users: action.payload
      };

    case 'FETCH_USERS_FAILURE':
      return {
        users: [],
        loading: false,
        error: action.payload
      }

    default:
      return state;
  }
};

export default reducers;