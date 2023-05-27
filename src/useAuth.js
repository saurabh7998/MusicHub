import {useState, useEffect} from "react"
import axios from "axios"

const client_id = '4a89680f85b44ea0931efc1d24e59460';
const client_secret = '0e5fe65837bd470f9b612a36e0895db6';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()

    useEffect(() => {

        axios.post("http://localhost:4000/authenticate").then((res) => {
            setAccessToken(res.data.token)
            // window.history.push({}, null, "/")
        }).catch((err) => {
            console.log(err)
            // window.location = "/"
        })
    }, [])

    return accessToken
}
