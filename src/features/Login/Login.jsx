import "./Login.scss";
import InputField from "../../components/InputField/InputField";
import { useForm, Controller } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";
import ButtonLogin from "./components/ButtonLogin/ButtonLogin";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("loggedIn"));
  const [loginError, setLoginError] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    if (data.email === "user1" && data.password === "12345678") {
      localStorage.setItem("loggedIn", "true");
      setIsLogged(true);
    } else {
      setLoginError(true);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      if (tokenResponse.access_token) {
        localStorage.setItem("loggedIn", "true");
        setIsLogged(true);
      }
    },
  });
  if (isLogged) {
    return <Navigate to="/chat" />;
  }

  return (
    <div className="login">
      <div className="login__form">
        <div className="login__title">Log in</div>
        <form className="login__form-wrap" onSubmit={handleSubmit(onSubmit)}>
          <div className="login__input-block">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputField className="login__input-email" type="text" placeholder="user1" {...field} />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <InputField className="login__input-password" type="password" placeholder="12345678" {...field} />
              )}
            />
            <div className={`login__error-msg ${loginError ? "" : "login__error-msg--disabled"}`}>
              Incorrect username or password (try login: user1, password: 12345678){" "}
            </div>
          </div>
          <button className="login__button">Log in</button>
        </form>
        <div className="login__or">or</div>
        <div className="login__google">
          <ButtonLogin onClick={login}> </ButtonLogin>
        </div>
      </div>
    </div>
  );
}

export default Login;
