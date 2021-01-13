import authService from '../../services/AuthService'

export const LOGIN ='LOGIN'
export const login = (params) => dispatch => {

 return   authService.Login(params)
 .then( data =>{

dispatch({type:LOGIN,payload:data})

 })
 .catch(error =>{



 });

}