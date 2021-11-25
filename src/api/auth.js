import instance from "./instance";

export const signup = (user) => {
  const url = "/users";
  return instance.post(url, user)
};
export const signin = (user) => {
  const url = "/signin";
  return instance.post(url, user);
};
