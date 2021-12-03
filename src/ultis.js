export const authenticate = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
}
export const isAuthenticate = () => {
    
    if (typeof window === 'undefined') return false;
    if (localStorage.getItem('persist:root')) {
        return JSON.parse(localStorage.getItem('persist:root'))
    } else {
        return false
    }
}