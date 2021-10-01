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
        } catch (erro) {
            setErro(erro.message)
            setLoading(false)
        } finally {
            setLoading(false)
            setData(response)
            return { response }
        }
    }, [])

    return {
        data,
        erro,
        Loading,
        request,
    }
}

export default useFetch
