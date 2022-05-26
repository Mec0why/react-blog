import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AddPost = (post) => {
    dispatch(
      addPost({
        ...post,
      })
    );

    navigate('/');
  };

  return (
    <PostForm
      action={AddPost}
      actionText={'Add Post'}
    />
  );
};

export default AddPostForm;
