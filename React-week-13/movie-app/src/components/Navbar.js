import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Movie App</a>
            </div>
        </nav>
    )
  }
}
