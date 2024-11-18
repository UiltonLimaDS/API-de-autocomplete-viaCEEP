import React, { useState, useEffect } from "react";
import CadastroPage from "./CadastroPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // Estados para CadastroPage
  const [nomeInput, setNomeInput] = useState("");
  const [datadenascimentoInput, setDatadeNascimentoInput] = useState("");
  const [CEPInput, setCEPInput] = useState("");
  const [ruaInput, setRuaInput] = useState("");
  const [numeroInput, setNumeroInput] = useState("");
  const [bairroInput, setBairroInput] = useState("");
  const [cidadeInput, setCidadeInput] = useState("");
  const [estadoInput, setEstadoInput] = useState("");
  return (
    <div className="App">
      <div>
        {isLoggedIn ? (
          <div>
            <CadastroPage
              emailInput={emailInput}
              setEmailInput={setEmailInput}
              nomeInput={nomeInput}
              setNomeInput={setNomeInput}
              datadenascimentoInput={datadenascimentoInput}
              setDatadeNascimentoInput={setDatadeNascimentoInput}
              passwordInput={passwordInput}
              setPasswordInput={setPasswordInput}
              CEPInput={CEPInput}
              setCEPInput={setCEPInput}
              ruaInput={ruaInput}
              setRuaInput={setRuaInput}
              numeroInput={numeroInput}
              setNumeroInput={setNumeroInput}
              bairroInput={bairroInput}
              setBairroInput={setBairroInput}
              cidadeInput={cidadeInput}
              setCidadeInput={setCidadeInput}
              estadoInput={estadoInput}
              setEstadoInput={setEstadoInput}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
