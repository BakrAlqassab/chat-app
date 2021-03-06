import authService from "../../services/authServices";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";
export const login = (params, history) => (dispatch) => {
  return authService
    .Login(params)
    .then((data) => {
      console.log(data)
      dispatch({ type: LOGIN, payload: data });
      history.push('/');
    })
    .catch((error) => {});
};


export const register = (params, history) => (dispatch) => {
  return authService
    .Register(params)
    .then((data) => {
      dispatch({ type: REGISTER, payload: data });
      history.push('/');
    })
    .catch((error) => {});
};

export const logout=() =>dispatch =>{
  authService.Logout()
  dispatch({type:LOGOUT})
}

