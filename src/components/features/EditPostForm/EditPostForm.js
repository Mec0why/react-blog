import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById } from '../../../redux/postsRedux';
import {} from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const EditPost = (post) => {
    dispatch();
    // addPost({
    //   ...post,
    // })

    navigate('/');
  };

  return <PostForm action={EditPost} actionText={'Add Post'} {...postData} />;
};

export default EditPostForm;
