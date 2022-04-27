import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export function CuerpoLab() {
  return (
    <div class="margen" id="fuente">
      <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <h1 calign="center" id="margen-titulo">
          Agregar Labotoratorio
        </h1>

        <nav class="margen">
          <div class="row">
            <div class="col">
              <label>Nombre</label>
              <input class="form-control form-control-lg" type="text" />
            </div>

            <div class="col">
              <label>Bloque</label>
              <input class="form-control form-control-lg" type="text" />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <label>Nivel</label>
              <input class="form-control form-control-lg" type="text" />
            </div>

            <div class="col">
              <label>Aula</label>
              <input class="form-control form-control-lg" type="text" />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <label>Capacidad</label>
              <input class="form-control form-control-lg" type="number" />
            </div>

            <div class="col">
              <label>Área</label>
              <input class="form-control form-control-lg" type="number" />
            </div>
          </div>
          <br />
          <h2>Redes</h2>
          <br />
          <div class="row">
            <div class="col" id="espacio-checkbox-text">
              <label htmlFor="">Hidráulica</label>
              <input
                style={{ marginLeft: "8%" }}
                type="checkbox"
                id="hidraulica"
              />
            </div>
            <div class="col">
              <label>Gases</label>
              <input style={{ marginLeft: "8%" }} type="checkbox" id="gases" />
            </div>
            <div class="col">
              <label>Eléctrica</label>
              <input
                style={{ marginLeft: "8%" }}
                type="checkbox"
                id="electrica"
              />
            </div>
            <div class="col">
              <label>Aire</label>
              <input style={{ marginLeft: "8%" }} type="checkbox" id="aire" />
            </div>
          </div>
          <br />

          <label>Otros</label>
          <br />
          <textarea name="comentarios" id="comen" rows="3"></textarea>

          <div id="btns">
            <div class="btn-group">
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/LabHome"
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
