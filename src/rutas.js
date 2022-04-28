import React from "react";
import { Cuerpo } from "./proto";
import { CuerpoLab } from "./paginas/laboratorios.jsx";
import { CrearElementos } from "./paginas/elementos";
import { AgregarLaboratorista } from "./paginas/laboratoristas";
import { ElementosHome } from "./paginas/elementosHome";
import { LaboratoristasHome } from "./paginas/laboratoristasHome";
import { LabHome } from "./paginas/laboratoriosHome";
import Login from "./paginas/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CrearFicha } from "./paginas/ficha";
import { FichaHome } from "./paginas/fichaHome";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lab" element={<CuerpoLab />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Cuerpo />}></Route>
        <Route path="/elementos" element={<CrearElementos />}></Route>
        <Route path="/elementosHome" element={<ElementosHome />}></Route>
        <Route
          path="laboratoristasHome"
          element={<LaboratoristasHome />}
        ></Route>
        <Route
          path="agregarLaboratoristas"
          element={<AgregarLaboratorista />}
        ></Route>
        <Route path="labHome" element={<LabHome />}></Route>
        <Route path="ficha" element={<CrearFicha/>}></Route>
        <Route path="fichaHome" element={<FichaHome/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
