import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h2>Home</h2>
        <Link to={'/about'}>About</Link>
        <div>
            <a href="/about">A tag About</a>
        </div>
        <div>
            <a href="https://www.google.com/" target={'blank'}>Google</a>
        </div>
        <div>
            <Link to={"https://www.google.com/"}>Link Google</Link>
        </div>
    </div>
  )
}

export default Home