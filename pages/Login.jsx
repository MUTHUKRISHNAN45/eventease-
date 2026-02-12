import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* ✅ LOGO */}
        <img
          src="/images/logo.png"
          alt="Event Ease Logo"
          className="login-logo"
        />

        {/* ✅ WELCOME TAG */}
        <h2 className="welcome-text">Welcome 👋</h2>
        <p className="welcome-sub">Book events easily with Event Ease</p>

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          New user? <span onClick={() => navigate("/register")}>Sign up</span>
        </p>

      </div>
    </div>
  );
}

export default Login;