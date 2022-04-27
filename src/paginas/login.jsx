import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div id="proto" className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Correo</label>
            <br />
            <input
              type="email"
              name="correo"
              id="correo"
              className="form-control"
            />
            <br />
            <label>Contraseña</label>
            <br />
            <input
              type="password"
              name="contraseña"
              id="contraseña"
              className="form-control"
            />
            <br />
            <Link style={{ textDecoration: "none", color: "#000" }} to="/home">
              <button id="tamaño-botones" className="btn btn-outline-success">
                Iniciar Sesión{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
