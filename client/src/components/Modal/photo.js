import React from 'react'
import PropTypes from 'prop-types'
import {
  //  Image,
  Modal,
  Header
} from 'semantic-ui-react'
import Form from './form'

const photoModal = ({
  header,
  imageTag,
  description,
}) => (
    <React.Fragment>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content image>
        {/*<Image wrapped size='medium' src='https://picsum.photos/200/300' />*/}
        {imageTag}
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>{description}</p>
          {/*Make sure something like a form field goes here*/}
          <Form />
        </Modal.Description>
      </Modal.Content>
    </React.Fragment>
  )

photoModal.propTypes = {
  header: PropTypes.string.isRequired,
  imageTag: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
}

export default photoModal
