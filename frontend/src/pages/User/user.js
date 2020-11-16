import React from "react";
import { Link, useHistory } from "react-router-dom";
import { TextField, Button, ButtonGroup } from "@material-ui/core";

import "./user.css";
import Logo from "../../assets/flairs logo.png";
import api from "../../services/api";
import Dataflow from "../../assets/DataFlow2.jpg";
export default function User() {
  const history = useHistory();
  async function handleCep(e) {
    e.preventDefault();
    try {
      const response = await api.get("");
      history.push("/");
      alert(`${response}`);
    } catch {
      alert(`Cadastrado com sucesso! \n \n Aguarde a aprovação...`);
    }
  }

  return (
    <div className="corpo">
      <div className="header">
      <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Link className="client-link" to="/customer">
            <Button>Cadastro Cliente</Button>
          </Link>
          <Link className="client-link" to="/event">
            <Button>Cadastro Evento</Button>
          </Link>
          {/* <Link className="client-link" to="/user"> */}
            <Button disabled="true">Cadastro Usuário</Button>
          {/* </Link> */}
          <Link className="client-link" to="/inventario">
            <Button>Cadastro Inventário(Em Breve)</Button>
          </Link>
        </ButtonGroup>
      </div>
      <div className="cima">
        <img src={Logo} />
      </div>
      <div className="baixo">
        <div className="cardr">
          <h3>Registro de Usuario</h3>
          <div className="inputs">
            <TextField
              id="email"
              label="E-mail"
              type="email"
              variant="outlined"
            />
            <TextField
              id="email"
              label="Senha"
              type="password"
              variant="outlined"
            />
          </div>
          <div className="buttons">
            <Button variant="contained" color="primary" onClick={handleCep}>
              Cadastro
            </Button>
          </div>
          <img src={Dataflow} />
        </div>
      </div>
    </div>
  );
}
