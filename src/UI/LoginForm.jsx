import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/ContextProvider";
import { loginUser, registerUser } from "../services/api";

function LoginForm() {
  const navigate = useNavigate();
  const { setToken, setUserRole, setUserName } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (username.trim() === "" || !password) {
      alert("Username cannot be empty. Please enter a valid username.");
      return;
    }
    if (password.length < 8) {
      // Minimum password length check
      setError("Password must be at least 8 characters long.");
      return;
    }
    (async () => {
      try {
        setLoading(true);
        const data = await registerUser(username.trim(), password);
        setToken(data.access_token);
        setUserName(username.trim());
        sessionStorage.setItem("token", data.access_token);
        sessionStorage.setItem("name", username.trim());
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
  };

  const handleLogin = () => {
    if (username.trim() === "" || !password) {
      alert("Make sure both the username and password are filled.");
      return;
    }
    if (password.length < 8) {
      // Minimum password length check
      setError("Password must be at least 8 characters long.");
      return;
    }
    (async () => {
      try {
        setLoading(true);
        const data = await loginUser(username.trim(), password);
        setToken(data.access_token);
        setUserName(data.name || username.trim());
        sessionStorage.setItem("token", data.access_token);
        sessionStorage.setItem("name", data.name || username.trim());
        if (!data.role) {
          navigate("role");
        } else {
          setUserRole(data.role);
          sessionStorage.setItem("role", data.role);
          navigate(data.role);
        }
      } catch (err) {
        alert(err.message);
        console.error(err.message);
      } finally {
        setLoading(false);
        setPassword("");
        setUsername("");
      }
    })();
  };

  return (
    <>
      <form
        className="flex flex-col mt-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
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
          className="w-full md:w-80 p-2 outline-none h-10 border-2 font-body border-black mb-3 placeholder:font-body disabled:cursor-not-allowed"
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
        />
        <label htmlFor="password" className="font-header text-2xl">
          Password:
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            className={`w-full md:w-80 px-2 outline-none h-10 border-2 border-black placeholder:font-body disabled:cursor-not-allowed ${
              error ? "border-red-500" : ""
            }`}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500 font-body"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {error && <p className="text-red-500 mt-1">{error}</p>}
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
