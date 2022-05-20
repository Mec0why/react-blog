import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Routes>
        <Route path='/' element={'<Home />'} />
        <Route path='/post/:id' element={'<Post />'} />
        <Route path='/post/add' element={'<PostAdd />'} />
        <Route exact strict path='/post/edit/:id' element={'<PostEdit />'} />
        <Route path='/about' element={'<About />'} />
        <Route path='*' element={'<NotFound />'} />
      </Routes>
    </main>
  );
}

export default App;
