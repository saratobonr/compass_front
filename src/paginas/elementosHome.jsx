import React from "react";
import "./style-eH.css";
import { Link } from "react-router-dom";

/*
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap"; */

export function ElementosHome() {
  return (
    <div>
      <Link style={{ textDecoration: "none", color: "#000" }} to="/elementos">
        <button id="margen-btn" type="button" class="btn btn-outline-success">
          Agregar Elemento
        </button>
      </Link>

      <br />
      <nav id="margen">
        <table class="table" id="letra-tabla">
          <thead style={{ color: "white", backgroundColor: "#aa0013" }}>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Número inventario</th>
              <th scope="col">Tipo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Serie</th>
              <th scope="col">Fecha actualización</th>
              <th scope="col">Estado</th>
              <th scope="col">Observaciones</th>
              <th scope="col">
                <center>
                  <button type="button" class="btn btn-outline-secondary">
                    <img
                      alt="view elements"
                      src={require("./pencil_white.png")}
                      width="20"
                      height="20"
                    />
                  </button>
                </center>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>235</td>
              <td>Portatil</td>
              <td>Pc</td>
              <th>Observaciones</th>

              <td>Asus</td>
              <td>Vivo</td>
              <td>ACC3523</td>
              <td>2022-02-18</td>
              <td>Bueno</td>
              <td>Con cargador, mouse y teclado externos</td>
              {/* esta parte se debe poner a cada elemento agregado **/}
              <td>
                <div class="radio">
                  <label>
                    <input type="radio" id="regular" name="optradio" />
                  </label>
                </div>
              </td>
              {/*
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    role="button"
                    size="sm"
                    color="primary"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem onClick={(e) => e.preventDefault()}>
                      <i className="ni ni-ui-04" />
                      Actualizar
                    </DropdownItem>
                    <DropdownItem>
                      <i className="ni ni-fat-remove" />
                      Eliminar
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              
              </td>*/}
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>98</td>
              <td>Pi4</td>
              <td>Raspberry</td>
              <td>Observaciones</td>

              <td>Raspberry</td>
              <td>Placa</td>
              <td>AZT23b453</td>
              <td>2022-02-19</td>
              <td>Excelente</td>
              <td>Con cargador, microSD, cable HDMI a micro HDMI</td>
              <td>
                <td>
                  <center>
                    <div class="radio">
                      <label>
                        <input type="radio" id="regular" name="optradio" />
                      </label>
                    </div>
                  </center>
                </td>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>1277</td>
              <td>Escritorio</td>
              <td>Computador</td>
              <th>Observaciones</th>

              <td>Lenovo</td>
              <td>ZP32"</td>
              <td>3248PLUS</td>
              <td>2022-03-26</td>
              <td>Bueno</td>
              <td>Mouse y teclado externos, sin bocinas.</td>
              <td>
                <td>
                  <center>
                    <div class="radio">
                      <label>
                        <input type="radio" id="regular" name="optradio" />
                      </label>
                    </div>
                  </center>
                </td>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    </div>
  );
}
