import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export function Cuerpo() {
  return (
    <div>
      <div id="proto">
        <div>
          <div class="container-fluid">
            <nav id="margen">
              <div class="row">
                <div class="col" id="tamaño-card">
                  <div class="card" id="borde">
                    <center>
                      <Link
                        style={{ textDecoration: 'none', color: '#000' }}
                        to="/elementosHome"
                      >
                        <div class="card-body">
                          <h3 class="card-title">
                            <br />
                            Elementos
                          </h3>
                          <img
                            alt="view elements"
                            src={require('./imagenes/fuerte/add_elements-hardred.png')}
                            width="210"
                            height="210"
                          ></img>
                          <br />
                        </div>
                      </Link>
                    </center>
                  </div>
                </div>
                <div class="col" id="tamaño-card">
                  <div class="card" id="borde">
                    <center>
                      <Link
                        style={{ textDecoration: 'none', color: '#000' }}
                        to="/laboratoristasHome"
                      >
                        <div class="card-body">
                          <h3 class="card-title">
                            <br />
                            Laboratoristas
                          </h3>
                          <img
                            alt="view elements"
                            src={require('./imagenes/fuerte/add_user-hardred.png')}
                            width="210"
                            height="210"
                          ></img>
                          <br />
                        </div>
                      </Link>
                    </center>
                  </div>
                </div>
                <div class="col" id="tamaño-card">
                  <div class="card" id="borde">
                    <center>
                      <Link
                        style={{ textDecoration: 'none', color: '#000' }}
                        to="/labHome"
                      >
                        <div class="card-body">
                          <h3 class="card-title">
                            {' '}
                            <br />
                            Laboratorios
                          </h3>
                          <img
                            alt="view elements"
                            src={require('./imagenes/fuerte/view_lab-hardred.png')}
                            width="200"
                            height="210"
                          ></img>
                          <br />
                        </div>
                      </Link>
                    </center>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <footer class="footer">
        <p>
          <br />
          Universidad de Medellín
          <br />
          Sección Centro de Laboratorios
          <br />
          <a href="https://goo.gl/maps/1PUQRpMbPCGSig5W7">
            Carrera 87 N° 30 - 65, Medellín - Colombia
          </a>{' '}
          Bloque 3
          <br />
          Teléfono (604) 5904500 | (604) 5906999 Ext 20922 - 209923
          <br />
          E-mail:{' '}
          <a href="mailto:laboratorios@udemedellin.edu.co">
            laboratorios@udemedellin.edu.co
          </a>
          <br />
          &copy; Copyright 2022 Todos los Derechos Reservados.
        </p>
      </footer>
    </div>
  );
}
