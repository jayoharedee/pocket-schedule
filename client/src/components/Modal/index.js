import React from 'react'
import PropTypes from 'prop-types'
import {
  //  Button,
  //  Header,
  Image,
  Modal
} from 'semantic-ui-react'

import PhotoModal from './photo'

const imageTag = <Image wrapped size='medium' src='https://picsum.photos/200/300' />

const FullModal = ({
  trigger,
  header,
  descriptionHeader,
  description,
}) => (
    <Modal dimmer='inverted' trigger={trigger}>
      <PhotoModal
        header={header}
        imageTag={imageTag}
        description={description}
      />
    </Modal>
  )

FullModal.propTypes = {
  trigger: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  descriptionHeader: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default FullModal
