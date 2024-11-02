import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setError("");
      login();
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="mx-auto justify-center h-screen flex align-middle w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Sign In</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Email address</label>
            <input
              placeholder="Type here"
              type="email"
              className="input max-w-full input-ghost-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Password</label>
            <div className="form-control">
              <input
                placeholder="Type here"
                type="password"
                className="input max-w-full input-ghost-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary w-full">
                Sign in
              </button>
            </div>
          </div>

          <div className="form-field">
            <div className="form-control justify-center">
              <a
                className="link link-underline-hover link-primary text-sm"
                onClick={() => navigate("/signup")}
              >
                Don't have an account yet? Sign up.
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
