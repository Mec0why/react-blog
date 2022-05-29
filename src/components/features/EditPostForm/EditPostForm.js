import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById } from '../../../redux/postsRedux';
import { editPost } from '../../../redux/postsRedux';
import { useNavigate, Navigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));

  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id: postId }));
    navigate('/');
  };

  if (!postData) return <Navigate to='/' />;
  return <PostForm action={handleSubmit} actionText={'Edit Post'} {...postData} />;
};

export default EditPostForm;
