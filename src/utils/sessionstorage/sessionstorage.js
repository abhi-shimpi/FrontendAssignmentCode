
export const setUserDetails = (userData) =>{
    localStorage.setItem("user",userData);
}

export const getUserDetails = () =>{
    return localStorage.getItem("user");
}

export const removeUserDetails = () => {
    localStorage.removeItem("user");
}