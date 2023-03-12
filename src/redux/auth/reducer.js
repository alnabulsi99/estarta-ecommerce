import * as AUTH_CONS from "./constants";

const initState = {
  isAuth: !!localStorage.getItem("token") || false,
  token: null,
  loading: false,
  user: JSON.parse(localStorage.getItem("user")) || {},
  error: null,
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case AUTH_CONS.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      }; 
      case AUTH_CONS.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload.userMetaData,
        token: action.payload.Token,
      };
    case AUTH_CONS.AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
   
    default:
      return state;
  }
}

export default authReducer;
