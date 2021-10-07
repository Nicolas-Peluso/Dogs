import React from 'react'
import useForm from "../../Hook/useForm"
import Input from "../Form/InputComponent"
import { UserContext } from '../../UserContext'
import ButtonForm from '../Form/ButtonForm'
import ErrorComponete from '../helper/ErrorComponete'
import { USER_POST } from '../../services/api'
import useFetch from '../../Hook/useFetch'

function LoginCreate() {
    const username = useForm(false)
    const email = useForm('email')
    const password = useForm('senha')

    const { UserLogin } = React.useContext(UserContext)
    const { request, data, erro, Loading } = useFetch()

    async function handleSubmit(e) {
        e.preventDefault()
        if (!username.erro && !password.erro && !email.erro) {
            const { url, options } = USER_POST({
                username: username.value,
                password: password.value,
                email: email.value
            })
            const { response } = request(url, options)
            console.log(response)
            if (data.code !== "error") {
                UserLogin(username.value, password.value)
                console.log("nccn")
            }
        }
    }

    return (
        <section className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input type="text" label="Nome" {...username} />
                <Input type="text" label="Email" {...email} />
                <Input type="password" label="Senha" {...password} />
                {Loading ? <ButtonForm disabled>Carregando...</ButtonForm> :
                    <ButtonForm type="submit">Cadastrar</ButtonForm>}
            </form>
            {erro && <ErrorComponete error={erro} />}
        </section>
    )
}

export default LoginCreate
