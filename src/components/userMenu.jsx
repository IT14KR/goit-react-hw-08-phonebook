import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './redux/auth/operation';
import { Link } from 'react-router-dom';
import { selectUser } from './redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <Link to="/contacts">PhoneBook</Link>
      <p> Welcome {user.name}</p>
      <button onClick={() => dispatch(logOut())}>LogOut</button>
    </div>
  );
};
export default UserMenu;
