export const API_URL = 'https://dogsapi.origamid.dev/json/'


export function TOKEN_POST(body) {
    return {
        url: API_URL + 'jwt-auth/v1/token',
        options: {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }
}

export function GET_USER(token) {
    return {
        url: API_URL + 'api/user',
        option: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer' + token,
            }
        }
    }
}

export function VALIDATE_POST_TOKEN(token) {
    return {
        url: API_URL + 'jwt-auth/v1/token/validate',
        options: {
            method: "POST",
            headers: {
                Authorization: 'Bearer' + token,
            }
        }
    }
}

export function USER_POST(body) {
    return {
        url: API_URL + 'api/user',
        options: {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }
}

export function PHOTO_POST(formData, token) {
    return {
        url: API_URL + 'api/photo',
        options: {
            method: "POST",
            headers: {
                Authorization: 'Bearer' + token,
            },
            body: formData
        }
    }
}

export function PHOTOS_GET({ page, total, user }) {

    return {
        url: `${API_URL}api/photo/?_total=${total}&_page=${page}&_user=${user}`,
        option: {
            method: 'GET',
            cache: 'no-store'
        }
    }
}

export function PHOTO_GET(id) {
    return {
        url: `${API_URL}api/photo/${id}`,
        option: {
            method: 'GET',
            cache: 'no-store'
        }
    }
}

export function COMMENT_POST(comentario, id) {
    const tok = localStorage.getItem("TOKEN")
    return {
        url: API_URL + `api/comment/${id}`,
        options: {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer' + tok
            },
            body: JSON.stringify(comentario)

        }
    }
}

export function PHOTO_DELETE(id) {
    const tok = localStorage.getItem("TOKEN")
    return {
        url: API_URL + `api/photo/${id}`,
        options: {
            method: "DELETE",
            headers: {
                Authorization: 'Bearer' + tok
            }
        }
    }
}

export function PASSWORD_LOST(body) {
    return {
        url: API_URL + `api/password/lost`,
        options: {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}
export function PASSWORD_RESET(body) {
    return {
        url: API_URL + `api/password/reset`,
        options: {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}

export function STATS_GET() {
    const tok = localStorage.getItem("TOKEN")
    return {
        url: API_URL + `api/stats`,
        options: {
            method: "GET",
            headers: {
                Authorization: 'Bearer' + tok
            }
        }
    }
}