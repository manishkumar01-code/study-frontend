import axiosClient from "./axiosClient";

export const registerApi = (name, email, password, confirmpassword) =>
  axiosClient
    .post("/user/register", { name, email, password, confirmpassword })
    .then((res) => res.data);

export const loginAPi = (email, password) =>
  axiosClient.post("/user/login", { email, password }).then((res) => res.data);
