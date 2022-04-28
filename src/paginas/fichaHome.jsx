import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function FichaHome() {
  return (
    <div>
      <Link style={{ textDecoration: "none", color: "#000" }} to="/ficha">
        <button id="margen-btn" type="button" class="btn btn-outline-success">
          Agregar ficha
        </button>
      </Link>

      <br />

      <nav id="margen">
        <table class="table" id="leta-tabla">
          <thead style={{ color: "white", backgroundColor: "#aa0013" }}>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Laboratorio</th>
              <th scope="col">Versión</th>
              <th scope="col">Fecha emisión</th>

              <th scope="col">
                <button type="button" class="btn btn-outline-secondary">
                  <img
                    alt="view elements"
                    src={require("./pencil_white.png")}
                    width="20"
                    height="20"
                  />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Ejemplo</th>
              <td>Ejemplo</td>
              <td>Ejemplo</td>
              <td>Ejemplo</td>
              <td>
                <div class="radio">
                  <label>
                    <input type="radio" id="regular" name="optradio" />
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    </div>
  );
}
