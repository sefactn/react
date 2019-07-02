import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Baslik from "./components/Information";

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td>
            <Baslik name="Tarık" birim="Yazılım" email="çalışan1@gmail.com" />
          </td>
          <td>
            <Baslik name="Ali" birim="Ağ" email="çalışan2@gmail.com" />
          </td>
          <td>
            <Baslik
              name="Murat"
              birim="Veritabanı"
              email="çalışan3@gmail.com"
            />
          </td>
          <td>
            <Baslik name="Hakan" birim="Yazılım" email="çalışan4@gmail.com" />
          </td>
        </tr>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
