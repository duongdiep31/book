const localStorageLang = localStorage.getItem('language')
const initialState = {
    language: localStorageLang ? localStorageLang : 'VN'
}
const languageSlice = (state = initialState, action) => {
    switch (action.type) {
    
    }
}