import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'
import CardActions from './cardActions'

const Contact = ({
  header,
  metaDescription,
  description,
  approveHandler,
  deleteHandler,
}) => (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='https://loremflickr.com/32/32/dog' />
          <Card.Header>{header}</Card.Header>
          <Card.Meta>{metaDescription}</Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>

        <CardActions
          approveHandler={approveHandler}
          deleteHandler={deleteHandler}
        />

      </Card>
    </Card.Group>
  )

Contact.propTypes = {
  header: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Contact