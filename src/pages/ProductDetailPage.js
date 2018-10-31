import React, { Component } from 'react'

export default class ProductDetailPage extends Component {
  render() {
    
    return (
      <div>
        Detail ProductDetailPage
        y el id es {this.props.match.params.id}
      </div>
    )
  }
}
