import React,{useState,useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
export function CrearElementos() {
  //useState para laboratorios ORGANIZARLO CON FICHA
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
  //useState para elementos
  const [campos, setCampos] = useState({
    numero_inventario: 0,
    nombre_elemento: '',
    cantidad: 0,
    marca: '',
    modelo: '',
    tipo: '',
    serie: '',
    estado: '',
    observaciones: '',
    descripcion: '',
  });

  const postElements = async e => {
    let lab = {
      numero_inventario: campos.numero_inventario,
      nombre_elemento: campos.nombre_elemento,
      cantidad: campos.cantidad,
      marca: campos.marca,
      modelo: campos.modelo,
      tipo: campos.tipo,
      serie: campos.serie,
      estado: campos.estado,
      observaciones: campos.observaciones,
      descripcion: campos.descripcion,
    };
    e.preventDefault();
    await axios.post('http://localhost:5610/api/v1/elementos', lab);
  };

  const onChange = e => {
    const value = e.target.value;
    setCampos({
      ...campos,
      [e.target.name]: value,
    });
  };
  return (
    <div className="margen" id="fuente">
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <h1 calign="center" id="margen-titulo">
          Crear Elemento
        </h1>

        <nav className="margen">
          <div className="row">
            <div className="col">
              <label>Número inventario</label>
              <input
                className="form-control form-control-lg"
                type="number"
                id="id_num_inventario"
                name="numero_inventario"
                value={campos.numero_inventario}
                onChange={onChange}
              />
            </div>
            <div className="col">
              <label>Tipo de elemento</label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="id_tipo"
                name="tipo"
                value={campos.tipo}
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label>Nombre del elemento</label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="id_nombre_elemento"
                name="nombre_elemento"
                value={campos.nombre_elemento}
                onChange={onChange}
              />
            </div>
            <div className="col">
              <label>Descripcion</label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="id_descripcion"
                name="descripcion"
                value={campos.descripcion}
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label>Marca</label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="id_marca"
                name="marca"
                value={campos.marca}
                onChange={onChange}
              />
            </div>
            <div className="col">
              <label>Modelo</label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="id_modelo"
                name="modelo"
                value={campos.modelo}
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label>Serie</label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="id_serie"
                name="serie"
                value={campos.serie}
                onChange={onChange}
              />
            </div>
            <div className="col">
              <label>Fecha actualización</label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="id_fecha_actualizacion"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label>Estado del elemento</label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="id_estado"
                name="estado"
                value={campos.estado}
                onChange={onChange}
              />
            </div>

            {/* ORGANIZAR EL MAP CON LA TABLA FICHA*/}
            <div className="col">
              <br />
              <select className="form-select-lg">
                <option >Seleccione una ficha</option>
                {labs.map(item => {
                  return (
                    <option key={item.id_laboratorio}>{item.nombre_laboratorio}</option>
                  );
                })}
              </select>
            </div>
          </div>          

          <br />
          <div>
            <div>
              <label>Observaciones</label>
              <br />
              <textarea
                name="observaciones"
                id="id_observaciones"
                cols="30"
                rows="3"
                value={campos.observaciones}
                onChange={onChange}
              ></textarea>
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
                
                onClick={postElements}
              >
                Agregar
              </button>

            
        </nav>
      </div>
    </div>
  );
}
