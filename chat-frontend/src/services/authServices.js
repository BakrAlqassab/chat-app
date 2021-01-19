import API from "./api";

const authService = {
  Login: (data) => {
    return API.post("/login", data)
      .then(({ data }) => {
      setHeadersAndStorage(data)
        return data;
      })
      .catch((error) => {
        console.log("Auth Servece Error", error);
        throw error;
      });
  },

  Register: (data) => {
    return API.post("/register", data)
      .then(({ data }) => {
        setHeadersAndStorage(data)
        return data;
      })
      .catch((error) => {
        console.log("Auth Servece Error", error);
        throw error;
      });
  },

  Logout: (data) => {
    API.defaults.headers["Authorization"] = "";
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  },
};

const setHeadersAndStorage = ({ user, token }) => {
  API.defaults.headers["Authorization"] = `Bearer ${token}`

  // eslint-disable-next-line no-unused-expressions
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};
export default authService;
