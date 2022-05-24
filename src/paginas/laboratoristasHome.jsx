import React from 'react';
import './style-eH.css';
import { Link } from 'react-router-dom';

export function LaboratoristasHome() {
  return (
    <div>
      <Link style={{ textDecoration: 'none', color: '#000' }} to="/agregarLaboratoristas">
        <button id="margen-btn" type="button" class="btn btn-outline-success">
          Agregar Laboratoristas
        </button>
      </Link>

      <br />
      <nav id="margen">
        <table class="table" id="letra-tabla">
          <thead style={{ color: 'white', backgroundColor: '#aa0013' }}>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Usuario</th>
              <th scope="col">Contraseña</th>
              {/*<th scope="col">
                <button type="button" class="btn btn-outline-secondary">
                  <img
                    alt="view elements"
                    src={require('./pencil_white.png')}
                    width="20"
                    height="20"
                  />
                </button>
  </th>*/}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Miguel</th>
              <td>Cifuentes</td>
              <td>mcifuentes</td>
              <td>123MiguelC</td>
              {/* esta parte se debe poner a cada elemento agregado 
              <td>
                <div class="radio">
                  <label>
                    <input type="radio" id="regular" name="optradio" />
                  </label>
                </div>
               </td> */}
            </tr>
          </tbody>
        </table>
      </nav>
    </div>
  );
}
