import "../styles/RegisterForm.css";

function RegisterForm() {
  return (
    <div className="container">
      <form action="">
        <h1>Register</h1>
        <input
          type="text"
          name="username"
          id="username-input"
          placeholder="Username"
        />
        <input type="email" name="email" id="email-input" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password-input"
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmed-password"
          id="confirmed-password-input"
          placeholder="Confirmed Password"
        />
        <p id="having-acc-txt">
          Already have an account? <a href="">Login Here</a>
        </p>
        <input type="submit" value="Login" id="submit-btn" />
      </form>
    </div>
  );
}

export default RegisterForm;
