import React from 'react'
import { Link } from 'react-router-dom'
import ButtonForm from '../Form/ButtonForm'
import Input from "../Form/InputComponent"
import Style from "./LoginForm.module.css"
import useForm from '../../Hook/useForm'
import { UserContext } from '../../UserContext'
import ErrorComponete from '../helper/ErrorComponete'
import Stylebtn from "../Form/ButtonForm.module.css"

function LoginForm() {
    const [ShowPass, setShowPass] = React.useState(false)

    const username = useForm(false)
    const password = useForm(false)

    const { UserLogin, Erro, Loading } = React.useContext(UserContext)

    async function handleSubmit(e) {
        e.preventDefault()

        if (username.validate() && password.validate()) {
            UserLogin(username.value, password.value)
        }
    }

    return (
        <section className='animeLeft'>
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit} className={Style.form}>
                <Input type="text"
                    label="Usuario" {...username} />

                <Input type={ShowPass ? "text" : "password"}
                    label="Senha" {...password} />

                <div className={Style.ShowPass}>
                    <input type="checkbox" value="Mostrar senha" onChange={({ target }) => setShowPass(target.checked)} id="ShowPass" />
                    <label htmlFor="ShowPass">Mostrar a senha</label>
                </div>
                {Erro && <ErrorComponete error={Erro} />}
                {Loading ? <ButtonForm disabled>Carregando...</ButtonForm> : <ButtonForm>Entrar</ButtonForm>}
            </form>

            <Link to="/login/perdeu" className={Style.Perdeu}>perdeu a senha?</Link>
            <div className={Style.cadastro}>
                <h2>Cadastre-se</h2>
                <p>aninda nao possui cadastro? cadastre-se no site</p>
                <Link className={Stylebtn.button} to="/login/criar">Cadastre-se</Link>
            </div>
        </section>
    )
}

export default LoginForm
