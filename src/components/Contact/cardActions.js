import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card } from 'semantic-ui-react'

import Modal from '../Modal';

const EditContact = ({
  trigger,
  header,
  descriptionHeader,
  description,
}) => (
    <Modal
      trigger={trigger}
      header={header}
      descriptionHeader={descriptionHeader}
      description={description}
    />
  )

// const Approve = ({ approveHandler }) => (
//   <Button basic color='green' onClick={approveHandler}>
//     Approve
//   </Button>
// )

// const Delete = ({ deleteHandler }) => (
//   <Button basic color='red' onClick={deleteHandler}>
//     Delete
//   </Button>
// )

const cardActions = ({ approveHandler, deleteHandler }) => (
  <Card.Content extra>
    <div className='ui two buttons'>

      <EditContact
        description="SOME STUFF"
        descriptionHeader="SOME STUFF"
        header="SOME STUFF"
        trigger={
          <Button basic color='green' onClick={approveHandler}>
            Approve
          </Button>
        }
      />

      <EditContact
        description="SOME STUFF"
        descriptionHeader="SOME STUFF"
        header="SOME STUFF"
        trigger={
          <Button basic color='red' onClick={deleteHandler}>
            Delete
          </Button>
        }
      />
    </div>
  </Card.Content>
)

cardActions.propTypes = {
  approveHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
}

export default cardActions
