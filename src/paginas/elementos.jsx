import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export function CrearElementos() {
  return (
    <div class="margen" id="fuente">
      <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <h1 calign="center" id="margen-titulo">
          Crear Elemento
        </h1>
        <nav class="margen">
          <div class="row">
            <div class="col">
              <label>Número inventario</label>
              <input
                class="form-control form-control-lg"
                type="number"
                id="num_inventario"
              />
            </div>
            <div class="col">
              <label>Tipo de elemento</label>
              <input
                class="form-control form-control-lg"
                type="text"
                id="tipo"
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <label>Nombre del elemento</label>
              <input
                class="form-control form-control-lg"
                type="text"
                id="nombre_elemento"
              />
            </div>
            <div class="col">
              <label>Descripcion</label>
              <input
                class="form-control form-control-lg"
                type="text"
                id="descripcion"
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <label>Marca</label>
              <input
                class="form-control form-control-lg"
                type="text"
                id="modelo"
              />
            </div>
            <div class="col">
              <label>Modelo</label>
              <input
                class="form-control form-control-lg"
                type="text"
                id="tipo_elemento"
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <label>Serie</label>
              <input
                class="form-control form-control-lg"
                type="text"
                id="serie"
              />
            </div>
            <div class="col">
              <label>Fecha actualización</label>
              <input
                class="form-control form-control-lg"
                type="text"
                id="estado_elemento"
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <label>Estado del elemento</label>
              <input
                class="form-control form-control-lg"
                type="text"
                id="estado_elemento"
              />
            </div>

            {/* alimentar el selecte con la base de datos*/}
            <div class="col">
              <br />
              <select class="form-select-lg">
                <option selected>Seleccione un laboratorio</option>
                <option value="1">Química</option>
                <option value="2">Software</option>
                <option value="3">Física</option>
              </select>
            </div>
          </div>

          <br />
          <div>
            <div>
              <label>Observaciones</label>
              <br />
              <textarea
                name="comentarios"
                id="comen"
                cols="30"
                rows="3"
              ></textarea>
            </div>
          </div>

          <div id="btns">
            <div class="btn-group">
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/elementosHome"
              >
                <button
                  type="button"
                  id="tamaño-botones"
                  class="btn btn-outline-danger"
                >
                  Cancelar
                </button>
              </Link>
              <button
                type="button"
                class="btn btn-outline-success"
                id="tamaño-botones"
                style={{ left: "10%" }}
              >
                Crear
              </button>
            </div>
          </div>
          <br />
        </nav>
      </div>
    </div>
  );
}
