import { register } from "components/redux/auth/operation";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, email, password } = evt.target.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    evt.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" />
        <input name="email" type="text" placeholder="E-mail" />
        <input name="password" type="text" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
