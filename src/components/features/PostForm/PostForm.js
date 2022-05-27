import styles from './PostForm.module.scss';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit} className='col-md-8 mx-auto my-4'>
      <Form.Group className='mb-4 col-md-6' controlId='formPostTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter Title'
        />
      </Form.Group>

      <Form.Group className='mb-4 col-md-6' controlId='formPostAuthor'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder='Enter Author'
        />
      </Form.Group>

      <Form.Group className='mb-4 col-md-6' controlId='formPostDate'>
        <Form.Label>Published</Form.Label>
        <Form.Control
          type='text'
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          placeholder='Enter Publish Date'
        />
      </Form.Group>

      <Form.Group className='mb-4' controlId='formPostShortDescription'>
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          as='textarea'
          type='text'
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          rows='3'
          placeholder='Enter Short Description'
        />
      </Form.Group>

      <Form.Group className='mb-4' controlId='formPostContent'>
        <Form.Label>Main Content</Form.Label>
        <ReactQuill
          className={styles.quill}
          theme='snow'
          value={content}
          onChange={setContent}
          placeholder='Enter Short Description'
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
};
