import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./style.css";



export function CrearFicha() {

    const [labs, setLabs] = useState([]);


    return (
      <div>
        <div class="margen" id="fuente">
          
          <div class="shadow-lg p-3 mb-5 bg-body rounded">
            <h1 calign="center" id="margen-titulo">
              Agregar Ficha
            </h1>
  
            <nav class="margen">
              <div class="row">
                <div class="col">
                <br />
              <select className="form-select-lg">
                <option >Seleccione un laboratorio</option>
                {labs.map(item => {
                  return (
                    <option key={item.id_laboratorio}>{item.nombre_laboratorio}</option>
                  );
                })}
              </select>
                </div>
  
                
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <label>Versión</label>
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    id="id_version"
                  />
                </div>
                <div class="col">
                  <label>Fecha emisión</label>
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    id="fecha"
                  />
                </div>
              </div>
            
  
  <Link
          style={{ textDecoration: "none", color: "#000" }}
          to="/home"
        >
          <button
            type="button"    
            id="tamaño-botones2"      
            className="btn btn-outline-danger"
            style={{marginRight: "5%"}}
          >
                    Cancelar
          </button>
        </Link>
                <button
                  type="button"
                  id="tamaño-botones2"
                  className="btn btn-outline-success"                
                  style={{ marginleft: "10%" }}
                >
                  Agregar
                </button>
                
            </nav>
          </div>
        </div>
      </div>
    );
  }