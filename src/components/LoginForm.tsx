import useForm from "../hooks/FormHooks";
import { Credentials } from "../types/LocalTypes";


const LoginForm = () => {
  const initValues: Credentials = {
    username: '',
    password: ''
  };

  const doLogin = () => {
    console.log(inputs);
  };

  const {handleSubmit, handleInputChange, inputs}=useForm (doLogin,initValues);
  return (
      <>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
               <div>
                   <label htmlFor="UserWithLevelname">Username</label>
                  <input
                      name="username"
                      type="text"
                      id="UserWithLevelname"
                      // onChange={ () => {} }
                      autoComplete="username"
                  />
              </div>
              <div>
                  <label htmlFor="loginpassword">Password</label>
                   <input
                      name="password"
                      type="password"
                      id="loginpassword"
                      onChange={handleInputChange}
                      autoComplete="current-password"
                      // value ={inputs.password}
                  />
              </div>
              <button type="submit">Login</button>
          </form>
      </>
  );
};
export default LoginForm;
