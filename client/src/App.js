import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import TopNav from './components/Header/';
import Contact from './components/Contact';


const approveHandler = () => console.log('you did it!')

const deleteHandler = () => console.log('you deleted it!')

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Joe Shmoe',
        phone: '777-444-8888',
        email: 'joeshmoe@yahoo.com',
      }
    ]
  }

  render() {
    const { contacts } = this.state
    const contactList = contacts.slice()

    return (
      <React.Fragment>
        <TopNav />
        <Container>
          {
            contactList.map((contact) => (
              <Contact
                id={contact.id}
                header={contact.name}
                metaDescription={contact.phone}
                description={contact.email}
                approveHandler={approveHandler}
                deleteHandler={deleteHandler}
              />
            ))
          }
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
