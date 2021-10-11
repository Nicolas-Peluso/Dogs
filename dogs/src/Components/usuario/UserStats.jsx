import React from 'react'
import Head from '../helper/Head'
import { STATS_GET } from '../../services/api'
import useFetch from '../../Hook/useFetch'
import ErrorComponete from '../helper/ErrorComponete'
import Carregando from '../helper/Carregando'
import UserStatsGraphs from './UserStatsGraphs'

function UserStats() {
    const { request, data, erro, Loading } = useFetch()

    React.useEffect(() => {
        const { url, options } = STATS_GET()
        request(url, options)
        console.log(data)
        console.log(erro)
    }, [request])

    if (Loading) return <Carregando />
    if (erro) return <ErrorComponete error={erro} />
    if (data)
        return (
            <div>
                <Head title="Estatisticas" />
                <UserStatsGraphs />
            </div>
        )
    else return null
}

export default UserStats
