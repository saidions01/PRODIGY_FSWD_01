
import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else {
          console.log("incorrect input");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form className="column g-2" onSubmit={handleLogin}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label col-form-label-sm">
            <strong>Email</strong>
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label col-form-label-sm">
            <strong>Password</strong>
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>

      <div className="column">
       do not have an account? 
        <Link to="/register" className="btn btn-link">
          SignUp
        </Link>
      </div>
    </div>
  );
}
export default Login;
