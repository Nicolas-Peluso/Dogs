import React from 'react'

function useFetch() {
    const [data, setData] = React.useState('')
    const [erro, setErro] = React.useState(null)
    const [Loading, setLoading] = React.useState(null)

    const request = React.useCallback(async (url, options) => {
        let res;
        let response;
        try {
            setLoading(true)
            setErro(null)
            res = await fetch(url, options)
            response = await res.json()
            if (res.ok === false) throw new Error(response.message)
            setData(response)
        } catch (erro) {
            setErro(erro)
            setLoading(false)
        } finally {
            setLoading(false)
            return { response, res }
        }
    }, [])

    return {
        data,
        erro,
        setData,
        Loading,
        request,
    }
}

export default useFetch
