import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./style.css";
import axios from "axios";


export function CrearFicha() {

  const [select,setSelect] = useState();
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

    //useState para Fichas
    const [campos, setCampos] = useState({
      codigo_ficha:'',
      id_laboratorio: 0,
      fecha_emision: '',
      version: '',
    });
    const postFicha = async e => {
      let ficha = {
        codigo_ficha:campos.codigo_ficha,
        id_laboratorio: select.split(' ')[0],
        fecha_emision: campos.fecha_emision,
        version: campos.version,
      };
      e.preventDefault();
      await axios.post('http://localhost:5610/api/v1/ficha', ficha);
    };
    const onChange = e => {
      const value = e.target.value;
      setCampos({
        ...campos,
        [e.target.name]: value,
      });
    };
    return (
      <div>
        <div className="margen" id="fuente">
          
          <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h1 calign="center" id="margen-titulo">
              Agregar Ficha
            </h1>
  
            <nav className="margen">
              <div className="row">
                <div className="col">
                <br />
              <select className="form-select-lg" value={select} onChange={e=>setSelect(e.target.value)}>
                <option >Seleccione un laboratorio</option>
                {labs.map(item => {
                  return (
                    <option key={item.id_laboratorio}>{item.id_laboratorio} {item.nombre_laboratorio}</option>
                  );
                })}
              </select>
                </div>
  
                
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <label>Código</label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    id="id_ficha"
                    name='codigo_ficha'
                    onChange ={onChange}
                  />
                </div>
                <div className="col">
                  <label>Versión</label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    id="id_version"
                    name='version'
                    onChange ={onChange}
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
                  onClick={postFicha}
                >
                  Agregar
                </button>
                
            </nav>
          </div>
        </div>
      </div>
    );
  }