import Posts from '../../features/Posts/Posts';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h1>All Posts</h1>
        <Button className='my-2' variant='primary'>
          Add Post
        </Button>
      </div>
      <Posts />
    </div>
  );
};

export default Home;
