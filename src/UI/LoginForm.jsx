import { useNavigate } from "react-router";
import { useState } from "react";
import { loginUser, registerUser } from "../services/api";
import { useUser } from "../Context/ContextProvider";

function LoginForm() {
  const navigate = useNavigate();
  const { setToken } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSignUp() {
    if (username.trim() === "") {
      alert("Username cannot be empty. Please enter a valid username.");
      return;
    }
    (async () => {
      try {
        setLoading(true);
        const data = await registerUser(username.trim(), password);
        setToken(data.access_token);
        navigate("role");
      } catch (err) {
        alert(err.message);
        console.error(err.message);
      } finally {
        setLoading(false);
        setPassword("");
        setUsername("");
      }
    })();
  }

  function handleLogin() {
    if (username.trim() === "") {
      alert("Username cannot be empty. Please enter a valid username.");
      return;
    }

    (async () => {
      try {
        setLoading(true);
        const data = await loginUser(username.trim(), password);
        setToken(data.access_token);
        navigate(`${data.role}`);
      } catch (err) {
        alert(err.message);
        console.error(err.message);
      } finally {
        setLoading(false);
        setPassword("");
        setUsername("");
      }
    })();
  }
  return (
    <>
      <form
        className="flex flex-col mt-2 w-full"
        onSubmit={() => {
          alert("What happened");
        }}
      >
        <label htmlFor="username" className="font-header text-2xl">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          required
          placeholder="Enter your username"
          className="w-full md:w-80  p-2 outline-none h-10 border-2 font-body border-black mb-3 placeholder:font-body disabled:cursor-not-allowed"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          disabled={loading}
        />
        <label htmlFor="password" className="font-header text-2xl">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Enter your password"
          className="w-full md:w-80 px-2 outline-none h-10 border-2 border-black placeholder:font-body disabled:cursor-not-allowed"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          disabled={loading}
        />
      </form>
      <div className="font-header w-full my-6 text-center text-xl">
        <button
          className="block bg-green px-2 w-full h-9 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSignUp}
          disabled={loading}
        >
          Sign Up
        </button>
        <p>or</p>
        <button
          className="block border-2 border-green w-full h-9 text-green disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </>
  );
}

export default LoginForm;
