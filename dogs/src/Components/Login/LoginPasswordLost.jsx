import React from 'react'
import InputComponent from "../Form/InputComponent"
import useForm from "../../Hook/useForm"
import useFetch from "../../Hook/useFetch"
import ButtonForm from "../Form/ButtonForm"
import { PASSWORD_LOST } from "../../services/api"
import ErrorComponente from "../helper/ErrorComponete"
import Head from '../helper/Head'

function LoginPasswordLost() {
    const email = useForm(false)
    const { request, Loading, erro, data } = useFetch()


    async function handleSubmit(e) {
        e.preventDefault()
        if (email.erro === null && email.value.length !== 0) {
            const { url, options } = PASSWORD_LOST({
                login: email.value, url:
                    window.location.href.replace("perdeu", "resetar")
            })
            const { response, res } = await request(url, options)
            console.log(response)
            console.log(res)
        }
    }

    return (
        <section>
            <Head title="Perdeu a senha" />
            <h1 className="title">Perdeu a senha</h1>
            {!data && <form onSubmit={handleSubmit}>
                <InputComponent label="email / usuario" type="text" name="email"
                    {...email}
                />

                {Loading ? <ButtonForm disabled>Carregando...</ButtonForm> :
                    <ButtonForm>Enviar</ButtonForm>}
            </form>}

            {data && <p style={{ color: "#4c1" }}>{data}</p>}
            {erro && <ErrorComponente style={{ color: "#4c1" }} error={erro.message} />}
        </section>
    )
}

export default LoginPasswordLost
