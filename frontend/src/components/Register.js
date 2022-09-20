import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import agent from "../agent";
import {
  REGISTER,
  REGISTER_PAGE_UNLOADED,
  UPDATE_FIELD_AUTH,
} from "../constants/actionTypes";
import ListErrors from "./ListErrors";

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (value) =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: "email", value }),
  onChangePassword: (value) =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: "password", value }),
  onChangeUsername: (value) =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: "username", value }),
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({ type: REGISTER, payload });
  },
  onUnload: () => dispatch({ type: REGISTER_PAGE_UNLOADED }),
});

class Register extends React.Component {
  constructor() {
    super();
    this.changeEmail = (ev) => this.props.onChangeEmail(ev.target.value);
    this.changePassword = (ev) => this.props.onChangePassword(ev.target.value);
    this.changeUsername = (ev) => this.props.onChangeUsername(ev.target.value);
    this.submitForm = (username, email, password) => (ev) => {
      ev.preventDefault();
      this.props.onSubmit(username, email, password);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;
    const username = this.props.username;

    return (
      <div className="auth-page">
        <div className="container page text-center text-dark">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12 bg-white p-4">
              <h1 className="text-xs-center font-weight-bold pb-4">Sign Up</h1>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(username, email, password)}>
                <fieldset>
                  <fieldset className="form-group">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ background: null }}
                        >
                          <i className="bi bi-person-fill text-secondary"></i>
                        </span>
                      </div>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Username"
                        value={this.props.username}
                        onChange={this.changeUsername}
                      />
                    </div>
                  </fieldset>

                  <fieldset className="form-group">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ background: null }}
                        >
                          <i className="bi bi-lock-fill text-secondary"></i>
                        </span>
                      </div>
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        value={this.props.password}
                        onChange={this.changePassword}
                      />
                    </div>
                  </fieldset>

                  <fieldset className="form-group">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ background: null }}
                        >
                          <i className="bi bi-envelope-fill text-secondary"></i>
                        </span>
                      </div>
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        placeholder="Email"
                        value={this.props.email}
                        onChange={this.changeEmail}
                      />
                    </div>
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    disabled={this.props.inProgress}
                    style={{
                      border: 0,
                      background:
                        "linear-gradient(90deg, #4683CA -3.21%, #AF93F2 100%)",
                      borderRadius: "5px",
                    }}
                  >
                    SIGN UP
                  </button>
                </fieldset>
              </form>
              <p className="text-center pt-4">
                <Link to="/login" className="text-light">
                  Have an account?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
