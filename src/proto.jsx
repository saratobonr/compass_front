import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export function Cuerpo() {
  return (
    <div>
      <div id="proto">
        <div>
          <div class="container-fluid">
            <nav id="margen">
              <div class="row">
                <div class="col" id="tamaño-card">
                  <div class="card" id="borde">
                    <center>
                      <Link
                        style={{ textDecoration: "none", color: "#000" }}
                        to="/elementosHome"
                      >
                        <div class="card-body">
                          <h3 class="card-title">
                            <br />
                            Elementos
                          </h3>
                          <img
                            alt="view elements"
                            src={require("./imagenes/fuerte/add_elements-hardred.png")}
                            width="210"
                            height="210"
                          ></img>
                          <br />
                        </div>
                      </Link>
                    </center>
                  </div>
                </div>
                <div class="col" id="tamaño-card">
                  <div class="card" id="borde">
                    <center>
                      <Link
                        style={{ textDecoration: "none", color: "#000" }}
                        to="/laboratoristasHome"
                      >
                        <div class="card-body">
                          <h3 class="card-title">
                            <br />
                            Laboratoriastas
                          </h3>
                          <img
                            alt="view elements"
                            src={require("./imagenes/fuerte/add_user-hardred.png")}
                            width="210"
                            height="210"
                          ></img>
                          <br />
                        </div>
                      </Link>
                    </center>
                  </div>
                </div>
                <div class="col" id="tamaño-card">
                  <div class="card" id="borde">
                    <center>
                      <Link
                        style={{ textDecoration: "none", color: "#000" }}
                        to="/labHome"
                      >
                        <div class="card-body">
                          <h3 class="card-title">
                            {" "}
                            <br />
                            Laboratorios
                          </h3>
                          <img
                            alt="view elements"
                            src={require("./imagenes/fuerte/view_lab-hardred.png")}
                            width="200"
                            height="210"
                          ></img>
                          <br />
                        </div>
                      </Link>
                    </center>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
