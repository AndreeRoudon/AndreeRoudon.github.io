import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {login, reset} from '../../core/features/auth/authSlice.ts'
import {RootState} from "../../core/store/store";

interface AuthState {
  token: string | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

function SignIn() {
  const [userEmail, setUserEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {token, isLoading, isError, isSuccess, message} = useSelector(
    (state: RootState) => state.auth as AuthState
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess && token) {
      navigate('/user');
    }

    dispatch(reset());
  }, [token, isError, isSuccess, message, navigate, dispatch]);

  const handleUserEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const userData = {email: userEmail, password: password};
    dispatch(login(userData));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="sign-in">
      <form onSubmit={handleSubmit} className="sign-in__form">
        <h2 className="sign-in__form--title">Sign In</h2>
        <div className="sign-in__form__content">
          <div className="sign-in__form__inputText">
            <label className="sign-in__form__inputText--label" htmlFor="email">Address email : </label>
            <input className="sign-in__form__inputText--input" type="email" name="email" id="email"
                   placeholder="Address email" value={userEmail}
                   onChange={handleUserEmailChange}/>
          </div>
          <div className="sign-in__form__inputText">
            <label className="sign-in__form__inputText--label" htmlFor="password">Password : </label>
            <input className="sign-in__form__inputText--input" type="password" name="password" id="password"
                   placeholder="Password" value={password}
                   onChange={handlePasswordChange}/>
          </div>
          <div className="sign-in__form--remember">
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMeChange}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
        </div>

        <p className="sign-in__form--forgotPassword">Forgot your Password ?</p>
        <button onClick={handleSubmit} className="sign-in__form--btn" type="submit">Sign in</button>
      </form>
    </main>
  );
}

export default SignIn;
