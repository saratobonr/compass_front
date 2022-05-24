import React, { useState, useEffect } from 'react';
import './style-eH.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ExportExcel from 'react-export-excel';

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

/*
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap"; */

export function ElementosHome() {
  const [elementos, setElementos] = useState([]);
  const getElementos = async () => {
    await axios
      .get('http://localhost:5610/api/v1/elementos')
      .then(res => setElementos(res.data.data))
      .catch(err => console.log(err));
  };

  const exportE = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5610/api/v1/elementos/exportToExcel');
  }


  useEffect(() => {
    getElementos();
  }, []);

  return (
    <div>
      <Link style={{ textDecoration: 'none', color: '#000' }} to="/elementos">
        <button
          id="margen-btn"
          type="button"
          className="btn btn-outline-success"
          style={{ marginRight: '16%' }}
        >
          Agregar Elemento
        </button>
      </Link>
      <Link style={{ textDecoration: 'none', color: '#000' }} to="/exportToExcel">
        <button
          id="margen-btn"
          type="button"
          className="btn btn-outline-success"
          style={{ marginRight: '16%' }}
        >
          Descargar Excel
        </button>
      </Link>
      {/* <ExcelFile
        element={
          <button
            id="margen-btn"
            type="button"
            className="btn btn-outline-success"
            style={{ marginRight: '0%' }}
          >
            Descargar Excel
          </button>
        }
        filename="elementos"
      >
        <ExcelSheet data={elementos} name="elementos de laboratorio">
          <ExcelColumn label="CODIGO_ELEMENTO" value="codigo_elemento"></ExcelColumn>
          <ExcelColumn label="NOMBRE" value="nombre_elemento"></ExcelColumn>
          <ExcelColumn label="MARCA" value="marca"></ExcelColumn>
          <ExcelColumn label="CANTIDAD" value="cantidad"></ExcelColumn>
          <ExcelColumn label="MARCA" value="marca"></ExcelColumn>
          <ExcelColumn label="MODELO" value="modelo"></ExcelColumn>
          <ExcelColumn label="TIPO" value="tipo"></ExcelColumn>
          <ExcelColumn label="SERIE" value="serie"></ExcelColumn>
          <ExcelColumn
            label="FECHA_ACTUALIZACION"
            value="fecha_actualizacion"
          ></ExcelColumn>
          <ExcelColumn label="ESTADO" value="estado"></ExcelColumn>
          <ExcelColumn label="OBSERVACIONES" value="observaciones"></ExcelColumn>
        </ExcelSheet>
      </ExcelFile> */}

      <br />
      <nav id="margen">
        <table className="table" id="letra-tabla">
          <thead style={{ color: 'white', backgroundColor: '#aa0013' }}>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Número inventario</th>
              <th scope="col">Tipo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Serie</th>
              <th scope="col">Fecha actualización</th>
              <th scope="col">Estado</th>
              <th scope="col">Observaciones</th>
              <th scope="col">Cantidad</th>

              {/*<th scope="col">
                <center>
                  <button type="button" className="btn btn-outline-secondary">
                    <img
                      alt="view elements"
                      src={require('./pencil_white.png')}
                      width="20"
                      height="20"
                    />
                  </button>
                </center>
  </th>*/}
            </tr>
          </thead>
          <tbody>
            {elementos.map(item => {
              return (
                <tr key={item.codigo_elemento}>
                  <th scope="row">{item.codigo_elemento}</th>
                  <td>{item.numero_inventario}</td>
                  <td>{item.tipo}</td>
                  <td>{item.nombre_elemento}</td>
                  <td>{item.descripcion}</td>
                  <td>{item.marca}</td>
                  <td>{item.modelo}</td>
                  <td>{item.serie}</td>
                  <td>{item.fecha_actualizacion}</td>
                  <td>{item.estado}</td>
                  <td>{item.observaciones}</td>
                  <td>{item.cantidad}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </nav>
    </div>
  );
}
