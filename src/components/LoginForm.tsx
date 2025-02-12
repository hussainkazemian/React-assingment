import {useForm} from '../hooks/FormHooks';
import {Credentials} from '../types/LocalTypes';
import {useUserContext} from '../hooks/ContextHooks';

const LoginForm = (props: {
  toggleRegister: () => void;
}) => {
  const {toggleRegister} = props;
  const {handleLogin} = useUserContext();
  const initValues: Credentials = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      handleLogin(inputs as Credentials);
    } catch (error) {
      console.error((error as Error).message);
      // Display error to user here(?)
    }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doLogin,
    initValues,
  );

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex w-4/5 flex-col">
          <label htmlFor="loginusername">Username</label>
          <input
            className="my-2.5 rounded-md border p-2.5"
            name="username"
            type="text"
            id="loginusername"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div className="flex w-4/5 flex-col">
          <label htmlFor="loginpassword">Password</label>
          <input
            className="my-2.5 rounded-md border-1 p-2.5"
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button
          className="my-2.5 block w-4/5 rounded-md bg-stone-500 p-2 text-center transition-all duration-500 ease-in-out hover:bg-stone-700"
          type="submit"
        >
          Login
        </button>
        <button
          className="my-2.5 block w-4/5 rounded-md border border-stone-500 p-2 text-center transition-all duration-500 ease-in-out hover:bg-stone-100"
          type="button"
          onClick={toggleRegister}
        >
          Or register?
        </button>
      </form>
    </>
  );
};
export default LoginForm;

