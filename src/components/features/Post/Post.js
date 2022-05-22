import { Col, Card, Button } from 'react-bootstrap';

const Post = (props) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title className='fw-bold mb-3'>{props.title}</Card.Title>
          <Card.Text>
            <span className='fw-bold'>Author: </span>
            {props.author}
            <br />
            <span className='fw-bold'>Published: </span>
            {props.publishedDate}
            <br />
            <span className='d-inline-block text-truncate col-12'>
              {props.shortDescription}
            </span>
          </Card.Text>
          <Button variant='primary'>Read more</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;
