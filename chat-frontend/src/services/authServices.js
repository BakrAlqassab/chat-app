import API from "./api";

const authService = {
  Login: (data) => {
    return API.post("/login", data)
      .then(({ data }) => {
        API.defaults.headers["Authorization"] = `Bearer ${data.token}`
        return data
      })
      .catch((error) => {
        console.log("Auth Servece Error", error);
        throw error;
      });
  },

  Register: (data) => {

     return API.post("/register", data)
      .then(({ data }) => {
        API.defaults.headers["Authorization"] = `Bearer ${data.token}`
        return data
      })
      .catch((error) => {
        console.log("Auth Servece Error", error);
        throw error;
      });
  },

  Logout: (data) => {},
};
export default authService;
