import LoginForm from "../UI/LoginForm";

function Login() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-header text-4xl mr-auto md:mr-0 mb-2">
        Sign Up or Log In
      </h2>
      <div className="flex flex-col items-center w-full md:w-fit">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
