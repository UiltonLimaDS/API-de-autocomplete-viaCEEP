import React from "react";

function CadastroPage({
  emailInput,
  setEmailInput,
  nomeInput,
  setNomeInput,
  datadenascimentoInput,
  setDatadeNascimentoInput,
  passwordInput,
  setPasswordInput,

  CEPInput,
  setCEPInput,
  ruaInput,
  setRuaInput,
  numeroInput,
  setNumeroInput,
  bairroInput,
  setBairroInput,
  cidadeInput,
  setCidadeInput,
  estadoInput,
  setEstadoInput,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isForgotPassword) {
      onForgotPassword(emailInput);
    } else {
      onLogin();
    }
  };

  const nono = "oioi";
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.erro) {
          // Atualiza os campos somente se o CEP for válido
          setRuaInput(data.logradouro || "");
          setBairroInput(data.bairro || "");
          setCidadeInput(data.localidade || "");
          setEstadoInput(data.uf || "");
        } else {
          alert("CEP inválido. Tente novamente.");
        }
      })
      .catch(() => {
        alert("Erroooooooooooooooor");
      });
  };

  return (
    <div>
      <h1>Cadastro De Cliente</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome Completo:</label>
          <input
            type="nome"
            value={nomeInput}
            onChange={(e) => setNomeInput(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Data de nascimento:</label>
          <input
            type="date"
            value={datadenascimentoInput}
            onChange={(e) => setDatadeNascimentoInput(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            required
          />
        </div>

        <div>
          <label>CEP:</label>
          <input
            type="text"
            name="CEP"
            value={CEPInput}
            onChange={(e) => setCEPInput(e.target.value)}
            required
            onBlur={checkCEP}
          />
        </div>
        <div>
          <label>Rua:</label>
          <input
            type="text"
            value={ruaInput}
            name="rua"
            onChange={(e) => setRuaInput(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Numero:</label>
          <input
            type="number"
            value={numeroInput}
            onChange={(e) => setNumeroInput(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Bairro:</label>
          <input
            type="text"
            value={bairroInput}
            onChange={(e) => setBairroInput(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cidade:</label>
          <input
            type="text"
            value={cidadeInput}
            onChange={(e) => setCidadeInput(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Estado:</label>
          <input
            type="text"
            value={estadoInput}
            onChange={(e) => setEstadoInput(e.target.value)}
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroPage;
