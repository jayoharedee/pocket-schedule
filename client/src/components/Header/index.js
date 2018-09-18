import React, { Component } from 'react'
import Header from './header'

class TopNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <React.Fragment>
        <Header activeItem={activeItem} handleItemClick={this.handleItemClick} />
      </React.Fragment>
    )
  }
}

export default TopNav
