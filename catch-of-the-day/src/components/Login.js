import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your stores inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log in with GitHub
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
