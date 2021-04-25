import { api } from "./httpService";

class UserServices {
  //
  //data public

  authLogin = (auth_data) => {
    return api.post(`/${process.env.LOCAL_BACKEND_API_PATH_LOGIN}`, auth_data);
  };

  authRegister = () => {
    return api.post(`${process.env.LOCAL_BACKEND_API_PATH_REGISTER}`);
  };

  fetchProducts() {
    return api.get(`/${process.env.LOCAL_BACKEND_API_PATH_PRODUCT}`);
  }

  fetchVarians() {
    return api.get(`/${process.env.LOCAL_BACKEND_API_PATH_VARIAN}`);
  }

  fetchCart() {
    return api.get(`/${process.env.LOCAL_BACKEND_API_PATH_CART}`);
  }

  //
  //data private
  whoAmi(token) {
    return api.get(`/${process.env.LOCAL_BACKEND_API_PATH_USER}/:id`, {
      headers: { authorization: token },
    });
  }
}

export default new UserServices();
