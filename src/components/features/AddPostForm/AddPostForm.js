// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [publishedDate, setPublishedDate] = useState('');
//   const [shortDescription, setShortDescription] = useState('');
//   const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AddPost = (post) => {
    dispatch(
      addPost({
        ...post,
      })
    );
    // setTitle('');
    // setAuthor('');
    // setPublishedDate('');
    // setShortDescription('');
    // setContent('');
    navigate('/');
  };

  return (
    <PostForm
      action={AddPost}
      actionText={'Add Post'}
    //   title={title}
    //   author={author}
    //   publishedDate={publishedDate}
    //   shortDescription={shortDescription}
    //   content={content}
    />
  );
};

export default AddPostForm;
