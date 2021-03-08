import { api, apiProduct } from "./httpService";

class UserServices {
  //
  //data public

  authLogin = (auth_data) => {
    return api.post("/login", auth_data);
  };

  fetchAllUsers() {
    return api.get("/all-profiles");
  }

  fetchProducts() {
    return apiProduct.get("/products");
  }

  //
  //data private
  whoAmi(token) {
    return api.get("/user/profile/me", {
      headers: { authorization: token },
    });
  }
}

export default new UserServices();
