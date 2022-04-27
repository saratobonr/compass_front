import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export function AgregarLaboratorista() {
  return (
    <div>
      <div class="margen" id="fuente">
        <div>
          <div class="alert alert-danger" role="alert">
            La contraseña debe contener una mayúscula, una misnúscula, un número
            y un caracter especial
          </div>
        </div>
        <div class="shadow-lg p-3 mb-5 bg-body rounded">
          <h1 calign="center" id="margen-titulo">
            Agregar Labortorista
          </h1>

          <nav class="margen">
            <div class="row">
              <div class="col">
                <label>Nombre</label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  id="id_nombre"
                />
              </div>

              <div class="col">
                <label>Apellido</label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  id="id_apellido"
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col">
                <label>Usuario</label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  id="id_usuario"
                />
              </div>
              <div class="col">
                <label>Contraseña</label>
                <input
                  class="form-control form-control-lg"
                  type="tet"
                  id="id_contraseña"
                />
              </div>
            </div>
            <br />

            <div id="btns">
              <div class="btn-group">
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/home"
                >
                  <button
                    id="tamaño-botones"
                    type="button"
                    class="btn btn-outline-danger"
                  >
                    Cancelar
                  </button>
                </Link>
                <button
                  id="tamaño-botones"
                  type="button"
                  class="btn btn-outline-success"
                  style={{ marginLeft: "10%" }}
                >
                  Agregar
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
