import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/views/Home/Home';
import SinglePost from './components/features/SinglePost/SinglePost';
import EditPost from './components/features/EditPost/EditPost';

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:id' element={<SinglePost />} />
          <Route path='/post/add' element={'<PostAdd />'} />
          <Route path='/post/edit/:id' element={<EditPost />} />
          <Route path='/about' element={'<About />'} />
          <Route path='*' element={'<NotFound />'} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
