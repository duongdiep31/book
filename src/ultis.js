export const authenticate = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
}