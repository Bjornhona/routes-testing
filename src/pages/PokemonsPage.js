import React, { Component } from 'react';
import axios from 'axios';

export default class PokemonsPage extends Component {

  state = {
    posts: [],
    isLoading: true
  }

  componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    axios.get('http://localhost:5000/api/phones')
      .then(({ data }) => {
        console.log(data)
        this.setState({
          posts: data,
          isLoading: false
        })
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        })
      })
  }
  

  render() {
    const { posts, isLoading } = this.state;
    return (
      <div>
        <h2>Posts</h2>
        { isLoading ? 'Loading' : posts.map((post) => {
          return <li key={post._id}>{post.model}</li>
         })
        }
      </div>
    )
  }
}
