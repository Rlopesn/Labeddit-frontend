import axios from "axios"
import { createContext, useState } from "react"
import { BASE_URL } from "../../constant/BASE_URL"
import { goToComment } from "../../routes/coordenatior"

export const ContextGlobal = createContext()

export default function LabedditProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false)
    const [reload, setReload] = useState(false)


    const LoginAPI = async (body) => {
        const PATH = BASE_URL + "/users/login"
        await axios.post(PATH, body)
            .then(response => {
                setToken(response.data.token)
                setIsLogged(true)
            })
            .catch(error => {
                alert(error.response.data)

            })

    }

    const SignupAPI = async (body) => {
        const PATH = BASE_URL + "/users/signup"
        await axios.post(PATH, body)
            .then(response => {
                setToken(response.data.token)
                setIsLogged(true)
            })
            .catch(error => {
                alert(error.response.data)
            })

    }


    const getToken = () => {
        return localStorage.getItem("token")
    }

    const setToken = (token) => {
        localStorage.setItem("token", token)
    }

    const deleteToken = () => {
        localStorage.removeItem("token")
    }

    const headers = {
        headers:{
            Authorization: getToken()
        }
    }

    const getComments = async (postId) => {
        try {
            const PATH = BASE_URL + "/comments/"
            const result =  await axios.get(PATH, headers)
            console.log(result);
            return result
        } catch (error) {
            console.log(error);
        }
    }

    const context = {
        isLogged,
        setIsLogged,
        getToken,
        setToken,
        deleteToken,
        LoginAPI,
        SignupAPI,
        reload,
        setReload,
        getComment: getComments
    }

    return (
        <ContextGlobal.Provider value={context}>
            {children}
        </ContextGlobal.Provider>
    )
}
