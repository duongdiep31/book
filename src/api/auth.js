import instance from "./instance";

export const signup = (user) => {
  const url = "/api/register";
  return instance.post(url, user)
};
export const signin = (user) => {
  const url = "/api/signin";
  return instance.post(url, user);
};