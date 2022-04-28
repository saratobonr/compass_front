import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function CuerpoLab() {
  const [campos, setCampos] = useState({
    nombre_laboratorio: '',
    bloque: '',
    nivel: '',
    aula: '',
    capacidad: '',
    area: '',
    red_hidraulica: false,
    red_gases_especiales: false,
    red_electrica: false,
    red_aire: false,
    otros: '',
  });

  const postLabs = async e => {
    let lab = {
      nombre_laboratorio: campos.nombre_laboratorio,
      bloque: campos.bloque,
      nivel: campos.nivel,
      aula: campos.aula,
      capacidad: campos.capacidad,
      area: campos.area,
      red_hidraulica: campos.red_hidraulica,
      red_gases_especiales: campos.red_gases_especiales,
      red_electrica: campos.red_electrica,
      red_aire: campos.red_aire,
      otros: campos.otros,
    };
    e.preventDefault();
    await axios.post('http://localhost:5610/api/v1/laboratorios', lab);
  };

  const onChange = e => {
    const value = e.target.value;
    setCampos({
      ...campos,
      [e.target.name]: value,
    });
  };

  const onChangeCheck = e => {
    const {checked} = e.target;
    if(checked){
      setCampos({
        ...campos,
        [e.target.name]: true,
      });
    }else{
      setCampos({
        ...campos,
        [e.target.name]: false,
      });
    }
  };

  return (
    <div className="margen" id="fuente">
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <h1 calign="center" id="margen-titulo">
          Agregar Labotoratorios
        </h1>

        <nav className="margen">
          <div className="row">
            <div className="col">
              <label>Nombre</label>
              <input
                className="form-control form-control-lg"
                name="nombre_laboratorio"
                type="text"
                value={campos.nombre_laboratorio}
                onChange={onChange}
              />
            </div>

            <div className="col">
              <label>Bloque</label>
              <input
                className="form-control form-control-lg"
                name="bloque"
                type="text"
                value={campos.bloque}
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label>Nivel</label>
              <input
                className="form-control form-control-lg"
                name="nivel"
                type="text"
                value={campos.nivel}
                onChange={onChange}
              />
            </div>

            <div className="col">
              <label>Aula</label>
              <input
                className="form-control form-control-lg"
                type="text"
                name="aula"
                value={campos.aula}
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label>Capacidad</label>
              <input
                className="form-control form-control-lg"
                type="number"
                name="capacidad"
                value={campos.capacidad}
                onChange={onChange}
              />
            </div>

            <div className="col">
              <label>Área</label>
              <input
                className="form-control form-control-lg"
                type="number"
                name="area"
                value={campos.area}
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <h2>Redes</h2>
          <br />
          <div className="row">
            <div className="col" id="espacio-checkbox-text">
              <label htmlFor="">Hidráulica</label>
              <input
                style={{ marginLeft: '8%' }}
                type="checkbox"
                id="hidraulica"
                name='red_hidraulica'
                value={campos.red_hidraulica}
                onChange={onChangeCheck}
              />
            </div>
            <div className="col">
              <label>Gases</label>
              <input
                style={{ marginLeft: '8%' }}
                type="checkbox"
                id="gases"
                name='red_gases_especiales'
                value={campos.red_gases_especiales}
                onChange={onChangeCheck}
              />
            </div>
            <div className="col">
              <label>Eléctrica</label>
              <input
                style={{ marginLeft: '8%' }}
                type="checkbox"
                id="electrica"
                name='red_electrica'
                value={campos.red_electrica}
                onChange={onChangeCheck}
              />
            </div>
            <div className="col">
              <label>Aire</label>
              <input
                style={{ marginLeft: '8%' }}
                type="checkbox"
                id="aire"
                name='red_aire'
                value={campos.red_aire}
                onChange={onChangeCheck}
              />
            </div>
          </div>
          <br />

          <label>Otros</label>
          <br />
          <textarea
            name="otros"
            id="comen"
            rows="3"
            value={campos.otros}
            onChange={onChange}
          ></textarea>
<br />
          
              <Link style={{ textDecoration: 'none', color: '#000' }} to="/home">
                <button
                  id="tamaño-botones2"
                  type="button"
                  className="btn btn-outline-danger"
                  style={ {marginRight:'5%'}}
                >
                  Cancelar
                </button>
              </Link>
              <button
                id="tamaño-botones2"
                type="button"
                className="btn btn-outline-success"
                onClick={postLabs}
              >
                Crear
              </button>
            
          <br />
        </nav>
      </div>
    </div>
  );
}
