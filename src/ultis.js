export const authenticate = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
}
export const isAuthenticate = () => {
    if (typeof window === 'undefined') return false;
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return false
    }
}