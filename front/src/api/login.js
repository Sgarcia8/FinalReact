import axios from './axios_client'

export default async function login(password, user) {

    return axios.post('auth/login',
        {
        username: user,
        password: password
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
).then((res) => {
        return res
    }).catch((err) =>{
        console.error(err)
    })
    
}