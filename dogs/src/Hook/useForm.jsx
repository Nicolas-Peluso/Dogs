import React from 'react'
import { UserContext } from '../UserContext'

const Types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "preencha um email valido"
    },
    senha: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: "a senha deve conter: uma letra. um numero e 8(oito) caracter "
    }
}

function useForm(type) {
    const [value, setValue] = React.useState('')
    const [erro, setError] = React.useState('')
    const { setErro } = React.useContext(UserContext)

    function onChange({ target }) {
        setError(null)
        setErro(null)
        setValue(target.value)
    }

    function validate() {
        if (value.length === 0) {
            setError("digite um valor")
            return false
        }
        if (type === false) return true
        else if (Types[type] && !Types[type].regex.test(value)) {
            setError(Types[type].message)
        } else {
            setError(null)
            return true
        }
    }

    return {
        onChange,
        value,
        erro,
        onBlur: () => validate(value),
        validate: () => validate(value)
    }
}

export default useForm
