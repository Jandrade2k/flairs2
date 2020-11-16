import React, { UseState } from "react";
import { Link, useHistory } from "react-router-dom";
import { TextField, Button, ButtonGroup } from "@material-ui/core";
import InputMask from "react-input-mask";

import "./inventario.css";
import api from "../../services/api";
import Logo from "../../assets/flairs logo.png";
import Dataflow from "../../assets/DataFlow2.jpg";

export default function Inventario() {
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
          <Link className="client-link" to="/user">
            <Button>Cadastro Usuário</Button>
          </Link>
          {/* <Link className="client-link" to="/inventario"> */}
            <Button disabled="true">Cadastro Inventário(Em Breve)</Button>
          {/* </Link> */}
        </ButtonGroup>
      </div>
      <div className="cima">
        <img src={Logo} />
      </div>
      <div className="baixo">
        <div className="card">
          <h2>(EM BREVE)</h2>
        </div>
        <img src={Dataflow} />
      </div>
    </div>
  );
}
