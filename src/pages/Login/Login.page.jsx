import React from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../context/Auth/AuthContext';
import { useThemeContext } from '../../context/Theme/ThemeContext';
import useStyles from './Login.page.styles';

function LoginPage() {
  const { login } = useAuth();
  const { themeState } = useThemeContext();
  const history = useHistory();
  const classes = useStyles();
  const {
    loginSection,
    loginH1,
    loginForm,
    formGroup,
    formGroupStrong,
    loginFormButton,
    formGroupInput,
    formGroupInputDarkText,
    formGroupInputLightText,
  } = classes;

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/');
  }

  return (
    <section className={loginSection} data-testid="login-section">
      <h1 className={loginH1}>Welcome!</h1>
      <form onSubmit={authenticate} className={loginForm}>
        <div className={formGroup} data-testid="login-username">
          <label htmlFor="username">
            <strong className={formGroupStrong}>Username: </strong>
            <input
              required
              type="text"
              id="username"
              className={`${formGroupInput} ${
                themeState.themeDark ? formGroupInputDarkText : formGroupInputLightText
              }`}
            />
          </label>
        </div>
        <div className={formGroup} data-testid="login-password">
          <label htmlFor="password">
            <strong className={formGroupStrong}>Password: </strong>
            <input
              required
              type="password"
              id="password"
              className={`${formGroupInput} ${
                themeState.themeDark ? formGroupInputDarkText : formGroupInputLightText
              }`}
            />
          </label>
        </div>
        <button type="submit" className={loginFormButton}>
          login
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
