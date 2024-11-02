import { useState } from "react";
import { json, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function submitHandler(e) {
    e.preventDefault();

    const errors = {};
    let isValid = true;

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.password = "Passwords do not match";
      isValid = false;
    }

    setErr(errors);

    if (isValid) {
      const user = {
        email: email,
        password: password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/login");
      alert("Account sucessfully created!");
    }
  }

  return (
    <div className="mx-auto justify-center h-screen flex align-middle w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Sign up</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Email address</label>

            <input
              placeholder="Type here"
              type="email"
              className="input max-w-full"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {err.email && (
              <label className="form-label">
                <span className="form-label-alt text-red-700">{err.email}</span>
              </label>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Password</label>
            <div className="form-control">
              <input
                placeholder="Type here"
                type="password"
                className="input max-w-full"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            {err.password && (
              <label className="form-label">
                <span className="form-label-alt text-red-700">
                  {err.password}
                </span>
              </label>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Confirm Password</label>
            <div className="form-control">
              <input
                placeholder="Type here"
                type="password"
                className="input max-w-full"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary w-full">
                Sign up
              </button>
            </div>
          </div>

          <div className="form-field">
            <div className="form-control justify-center">
              <a
                className="link link-underline-hover link-primary text-sm"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Already have an account yet? Sign in.
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
