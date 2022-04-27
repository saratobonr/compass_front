import React from "react";
import "./style-eH.css";
import { Link } from "react-router-dom";

export function LabHome() {
  return (
    <div>
      <Link style={{ textDecoration: "none", color: "#000" }} to="/lab">
        <button id="margen-btn" type="button" class="btn btn-outline-success">
          Agregar Laboratorio
        </button>
      </Link>

      <br />
      <nav id="margen">
        <table class="table" id="letra-tabla">
          <thead style={{ color: "white", backgroundColor: "#aa0013" }}>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nombre Laboratoio</th>
              <th scope="col">Bloque</th>
              <th scope="col">Nivel</th>
              <th scope="col">Aula</th>
              <th scope="col">Capacidad</th>
              <th scope="col">Área</th>
              <th scope="col">Redes</th>
              <th scope="col">Otros</th>
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
              <th scope="row">1</th>
              <td>Química</td>
              <td>3</td>
              <td>2</td>
              <td>201</td>
              <td>25</td>
              <td>50 metros</td>
              <td>
                <ul>
                  <li>Eléctrica</li>
                  <li>Gases</li>
                  <li>Aire</li>
                </ul>
              </td>
              <td>Apto para clases prácticas y teoricas</td>
              {/* esta parte se debe poner a cada elemento agregado **/}
              <td>
                <div class="radio">
                  <label>
                    <input type="radio" id="regular" name="optradio" />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Software</td>
              <td>3</td>
              <td>2</td>
              <td>204</td>
              <td>15</td>
              <td>40 metros</td>
              <td>
                <ul>
                  <li>Eléctrica</li>
                  <li>Aire</li>
                </ul>
              </td>
              <td>Apto para clases prácticas de electronica</td>
              {/* esta parte se debe poner a cada elemento agregado **/}
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
