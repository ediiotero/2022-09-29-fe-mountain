import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className='fixed-bottom bg-black'>
        <p className='text-center text-white p-3'>&copy;{this.props.copy}</p>
      </footer>
    )
  }
}
