import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class StateColor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: 'black',
            posts: []
        }
    }

    handleClick = (newColor) => {
        this.setState({color: newColor})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
    }

    componentDidUpdate() {
        console.log('DID UPDATE')
    }

    componentWillUnmount() {
        console.log('DID UNMOUNT!!!')
    }


  render() {
    return (
      <>
      {/* {console.log('rendering')} */}
        <div  style={{
            width: '10rem',
            height: '10rem',
            backgroundColor: this.state.color
        }}></div>

        <button onClick={() => this.handleClick('red')}>RED</button>
        <button onClick={() => this.handleClick('green')}>GREEN</button>
        <button onClick={() => this.handleClick('blue')}>BLUE</button>

        <div>
            <button onClick={() => console.log('no update')}>TEST</button>
            <Link to="/count">Counter</Link>
        </div>

        {this.state.posts.map(post => <p key={post.id}>{post.title}</p>)}
      </>
    )
  }
}
