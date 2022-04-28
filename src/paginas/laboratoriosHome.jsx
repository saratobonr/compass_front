import React,{useState,useEffect} from "react";
import "./style-eH.css";
import { Link } from "react-router-dom";
import axios from "axios";
export function LabHome() {
  const [labs, setLabs] = useState([]);

  const getLabs = async () => {
    await axios
      .get('http://localhost:5610/api/v1/laboratorios')
      .then(res => setLabs(res.data.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getLabs();
  }, []);

  return (
    <div>
      {/*<Link style={{ textDecoration: "none", color: "#000" }} to="/lab">
        <button id="margen-btn" type="button" className="btn btn-outline-success">
          Agregar Laboratorio
        </button>
  </Link>*/}


    <div id="btns">
            <div className="btn-group">
             
              <Link style={{ textDecoration: 'none', color: '#000' }} to="/lab">
              <button
                id="tamaño-botones"
                type="button"
                className="btn btn-outline-success"
                style={{ marginRight: '7%' }}
                
              >
                Agregar laboratorio
              </button>
              </Link>

              <Link style={{ textDecoration: 'none', color: '#000' }} to="/fichaHome">
                <button
                  id="tamaño-botones"
                  type="button"
                  className="btn btn-outline-success"
                  
                >
                  Fichas
                </button>
              </Link>
            </div>
          </div>


      <br />
      <nav id="margen">
        <table className="table" id="letra-tabla">
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
                <button type="button" className="btn btn-outline-secondary">
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
          {labs.map(item => {
              return (
                <tr key={item.id_laboratorio}>
                  <th scope="row">{item.id_laboratorio}</th>
                  <td>{item.nombre_laboratorio}</td>
                  <td>{item.bloque}</td>
                  <td>{item.nivel}</td>
                  <td>{item.aula}</td>
                  <td>{item.capacidad}</td>
                  <td>{item.area}</td>
                  <td>
                    <ul>
                      <li>{item.red_hidraulica ? "Red hidraulica" : "No red hidraulica"}</li>
                      <li>{item.red_gases_especiales ? "Red gases especiales" : "No red gases especiales"}</li>
                      <li>{item.red_electrica ? "Red electrica" : "No red electrica"}</li>
                      <li>{item.red_aire ? "Red aire" : "No red aire"}</li>
                    </ul>
                  </td>
                  <td>{item.otros}</td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </nav>
    </div>
  );
}
