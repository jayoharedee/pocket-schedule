import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import TopNav from './components/Header/';
import Contact from './components/Contact';


const approveHandler = () => console.log('you did it!')

const deleteHandler = () => console.log('you deleted it!')

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <Container>
          <Contact
            header="Joe Shmoe"
            metaDescription="metaDescription"
            description="description"
            approveHandler={approveHandler}
            deleteHandler={deleteHandler}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
