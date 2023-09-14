import { login } from 'components/redux/auth/operation';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = evt.target.elements;
    dispatch(
      login({
        email: email.value,
        password: password.value,
      })
    );
    evt.target.reset();
  };
  return (
    <div >
      <div >Sign In</div>
      <form  onSubmit={handleSubmit}>
        <input
          
          name="email"
          type="text"
          placeholder="E-mail"
        />
        <input
          
          name="password"
          type="text"
          placeholder="Password"
        />
        <button  type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
