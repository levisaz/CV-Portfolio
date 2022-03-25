import React from 'react'

import { Card} from 'react-bootstrap'

const EducCard = (props) => {
  return (
    <Card className="text-left">
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Text>
            {props.text}
        </Card.Text>
        
        </Card.Body>
    </Card>
  )
}

export default EducCard