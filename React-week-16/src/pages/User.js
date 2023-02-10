import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const User = () => {
    const {username} = useParams()
    const [user, setUser] = useState({})

    const navigate = useNavigate()

    const fetchUser = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${username}`)
        const data = await res.json()
        setUser(data)
    }

    useEffect(() => {
        fetchUser()
    }, [])

  return (
    <>
        <div>Hello {username}</div>
        <button onClick={() => navigate('/')}>Go Home</button>
        <hr />
        <p>{user.name}</p>
        <p>{user.email}</p>
    </>
  )
}

export default User