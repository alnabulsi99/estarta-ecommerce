import * as AUTH_CONSTANSTS from "./constants";
import magic from "../../lib/magic-sdk";

export function Login(email) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_CONSTANSTS.AUTH_LOADING,
    });

    try {
      const res = await magic.auth.loginWithMagicLink({ email });
      if (res) {
        const Token = await magic.user.getIdToken();
        const userMetaData = await magic.user.getMetadata();

        localStorage.setItem("token", Token);
        localStorage.setItem("user", JSON.stringify(userMetaData));

        dispatch({
          type: AUTH_CONSTANSTS.AUTH_SUCCESS,
          payload: { userMetaData, Token },
        });
      return true
      }


    } catch (error) {
      dispatch({
        type: AUTH_CONSTANSTS.AUTH_ERROR,
        payload: error,
      });
      return false;
    }
  };
}

export const Logout = () => async (dispatch) => {
  dispatch({ type: AUTH_CONSTANSTS.AUTH_LOADING });

  try {
    const res = await magic.user.logout();
    if (res) {
      localStorage.clear();
      dispatch({
        type: AUTH_CONSTANSTS.CLEAR,
      });
    }
    return true;
  } catch (error) {
    dispatch({
      type: AUTH_CONSTANSTS.AUTH_ERROR,
      payload: error,
    });
    return false;
  }
};

export const validateToken = () => async (dispatch) => {
  dispatch({
    type: AUTH_CONSTANSTS.AUTH_LOADING,
  });

  try {
     await magic.user.getIdToken();
      dispatch({ type: AUTH_CONSTANSTS.RESET_LOADING });
    
    return true;
  } 
  catch (error) {
    localStorage.clear();
    dispatch({ type: AUTH_CONSTANSTS.CLEAR });
    return false;
  }
};
