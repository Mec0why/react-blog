import { Container, Row, Col } from 'react-bootstrap';

const AddPost = () => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <div className='col-md-8 align-self-center'>
          <h1 className='m-0'>Blog.app LLC</h1>
        </div>
      </Row>
      <Row className='mt-4 justify-content-center'>
        <Col className='fs-5 col-md-8 align-self-center'>
          <span className='fw-bold'>Adress: </span>
          <br />
          299 Browning Lane
          <br />
          Cortland
          <br />
          13045 New York
          <br />
          <span className='fw-bold'>Phone: </span>
          <br className='mt-4' />
          330-555-0789
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default AddPost;
