import LoginForm from "../UI/LoginForm";

function Login() {
  return (
    <div>
      <h2 className="font-header text-4xl mr-auto md:mr-0 mb-2 text-center">
        Sign Up or Log In
      </h2>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
