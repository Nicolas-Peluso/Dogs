import React from 'react'
import InputComponent from "../Form/InputComponent"
import useForm from "../../Hook/useForm"
import useFetch from "../../Hook/useFetch"
import ButtonForm from "../Form/ButtonForm"
import { PASSWORD_RESET } from '../../services/api'
import ErrorComponete from '../helper/ErrorComponete'
import { UserContext } from '../../UserContext'
import Head from '../helper/Head'

function LoginResetar() {
    const UserLogin = React.useContext(UserContext)
    const [login, setLogin] = React.useState('')
    const [key, setKey] = React.useState('')
    const NewPass = useForm('senha')
    const { request, data, Loading, erro } = useFetch()

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const key = params.get('key')
        const login = params.get('login')
        if (key)
            setKey(key)
        if (login)
            setLogin(login)

    }, [])

    async function hanldesubmit(e) {
        e.preventDefault()
        console.log(key)
        console.log(login)
        if (NewPass.validate) {
            const { url, options } = PASSWORD_RESET({
                login: login,
                key: key,
                password: NewPass.value
            })
            const { res } = await request(url, options)
            if (res.ok)
                UserLogin.UserLogin(login, NewPass.value)
        }
    }

    return (<section>
        <Head title="Resetar a senha" />

        <form onSubmit={hanldesubmit}>
            <h1 className="title">Resetar</h1>
            <InputComponent type="text" name="senha" {...NewPass} />
            {Loading || UserLogin.Loading ? <ButtonForm disabled>Carregando</ButtonForm> :
                <ButtonForm>Resetar senha</ButtonForm>}
            {UserLogin.Loading && <ButtonForm disabled>Fazendo Login</ButtonForm>}
            {erro && <ErrorComponete error={erro} />}
            {data && <p>{data}</p>}
        </form>
    </section>
    )
}

export default LoginResetar
