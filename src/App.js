import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/views/Home/Home';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import AddPost from './components/views/AddPost/AddPost';
import SinglePost from './components/features/SinglePost/SinglePost';
import EditPostForm from './components/features/EditPostForm/EditPostForm';

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/post/:postId' element={<SinglePost />} />
          <Route path='/post/add' element={<AddPost />} />
          <Route exact path='/post/edit/:postId' element={<EditPostForm />} />
          <Route path='/about' element={'<About />'} />
          <Route path='*' element={'<NotFound />'} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
