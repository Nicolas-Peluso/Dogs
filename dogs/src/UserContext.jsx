import React from 'react'
import { GET_USER, TOKEN_POST, VALIDATE_POST_TOKEN } from './services/api';
import { useNavigate } from "react-router-dom"
export const UserContext = React.createContext()

export function UserStorage({ children }) {
    const [data, setData] = React.useState(null)
    const [login, setLogin] = React.useState(null)
    const [Loading, setLoading] = React.useState(false)
    const [Erro, setErro] = React.useState(false)
    const navigate = useNavigate()
    React.useEffect(() => {
        async function TESTING() {
            const token = localStorage.getItem("TOKEN")
            const { url, options } = VALIDATE_POST_TOKEN(token)
            if (token) {
                let request;
                let response;

                try {
                    setLogin(false)
                    setLoading(true)
                    request = await fetch(url, options);
                    response = await request.json();
                    if (request.ok === false) throw new Error(response.message)
                } catch (erro) {
                    setErro(erro.message)
                    setLoading(false)
                    setLogin(false)
                } finally {
                    setData(response)
                    setLoading(false)
                    setErro(false)
                }
                if (response.data.status === 200)
                    getUser(token)
            }
        }
        TESTING()
    }, [])

    async function getUser(token) {
        const { url, option } = GET_USER(token)
        const request = await fetch(url, option)
        const response = await request.json()
        setData(response)
        setLogin(true)
        navigate('/conta')
    }

    async function UserLogin(username, password) {
        const { url, options } = TOKEN_POST({ username, password })
        let request;
        let json;

        try {
            setLoading(true)
            setLogin(false)
            setErro(false)
            request = await fetch(url, options)
            json = await request.json()
            if (request.ok === false) throw Error(json.message)
            window.localStorage.setItem("TOKEN", json.token)
            getUser(json.token)

        } catch (erro) {
            setErro(erro.message)
            setLoading(false)
        } finally {
            setLoading(false)
            setData(json)
        }
    }

    function logout() {
        setLoading(false)
        setData(null)
        setLogin(null)
        setErro(null)
        localStorage.removeItem("TOKEN")
        navigate('/login')
    }

    return (
        <UserContext.Provider value={{ UserLogin, data, Erro, Loading, login, logout, setErro }}>
            {children}
        </UserContext.Provider>
    )
}