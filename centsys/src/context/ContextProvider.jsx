import axiosClient from "../axios/AxiosClient";
import { useState, useContext, createContext } from "react";

const AuthContext = createContext({
    user: null,
    token: null,
    userId: null,
    mypost: null,
    editPost: null,
    post: null
});


export const AuthProvider = ({ children }) => {
    // const {isLogged, setIsLogged} = useState(false)

    const [user, setUser] = useState({});
    const [mypost, setPosts] = useState(null);
    const [userId, setUserId] = useState();
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [editPost, setEditPost] = useState();
    const [post, setPost] = useState({});


    const myToken = (token) => {
        setToken(token)

        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        }

    }

    return (
        <AuthContext.Provider value={{ user, token, post, setPost, setUser, myToken, setPosts, mypost, setUserId, userId, editPost, setEditPost }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)