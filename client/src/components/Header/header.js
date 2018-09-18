import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'

import Search from './search'

const header = ({ activeItem, handleItemClick }) => (
  <Menu secondary>
    <Menu.Item name='home' active={activeItem === 'home'} onClick={handleItemClick} />
    <Menu.Item
      name='messages'
      active={activeItem === 'messages'}
      onClick={handleItemClick}
    />
    <Menu.Item
      name='friends'
      active={activeItem === 'friends'}
      onClick={handleItemClick}
    />
    <Menu.Menu position='right'>
      <Menu.Item>
        <Search />
      </Menu.Item>
      <Menu.Item
        name='logout'
        active={activeItem === 'logout'}
        onClick={handleItemClick}
      />
    </Menu.Menu>
  </Menu>
)

header.propTypes = {
  activeItem: PropTypes.string.isRequired,
  handleItemClick: PropTypes.func.isRequired,
}


export default header
