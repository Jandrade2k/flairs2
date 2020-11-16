import React, { UseState } from "react";
import { Link, useHistory } from "react-router-dom";
import { TextField, Button, ButtonGroup } from "@material-ui/core";
import InputMask from "react-input-mask";

import api from "../../services/api";
import "./customer.css";
import Logo from "../../assets/flairs logo.png";
import Dataflow from "../../assets/DataFlow2.jpg";

export default function Customer() {

  const history = useHistory();
  async function handleCep(e) {
    e.preventDefault();
    try {
      const response = await api.get('');
      history.push("/");
      alert(`${response}`)
    } catch {
      alert(`Cadastrado com sucesso!`);
    }
  }

  return (
    <div className="corpo">
      <div className="header">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button disabled="true">Cadastro Cliente</Button>
          <Link className="client-link" to="/event">
          <Button>Cadastro Evento</Button>
          </Link>
          <Link className="client-link" to="/user">
          <Button >Cadastro Usuário</Button>
          </Link>
          <Link className="client-link" to="/inventario">
          <Button>Cadastro Inventário(Em Breve)</Button>
          </Link>
        </ButtonGroup>
      </div>
      <div className="cima">
        <img src={Logo} />
      </div>
      <div className="baixo">
        <div className="card-customer">
            <h3>Cadastro Cliente</h3>
            <div className="col1">
              <TextField id="name" label="Nome" variant="outlined" />
              <InputMask mask="(99) 99999-9999" disabled={false} maskChar=" ">
                {() => (
                  <TextField
                    id="phone"
                    label="Telefone"
                    variant="outlined"
                    placeholder=""
                  />
                )}
              </InputMask>
              <TextField id="contact" label="Contato" variant="outlined" />
              <TextField id="email" label="E-mail" variant="outlined" />
            </div>
            <div className="col2">
              <InputMask mask="99999-999" disabled={false} maskChar=" ">
                {() => (
                  <TextField
                    id="cep"
                    label="CEP"
                    variant="outlined"
                    placeholder=""
                  />
                )}
              </InputMask>
              <TextField id="place" label="Logradouro" variant="outlined" />
              <TextField id="number" label="Número" variant="outlined" />
            </div>
            <div className="col3">
              <TextField
                id="complement"
                label="Complemento"
                variant="outlined"
              />
              <TextField id="uf" label="Estado" variant="outlined" />
              <TextField id="city" label="Cidade" variant="outlined" />
            </div>
            <div className="button">
              <Button variant="contained" color="primary" onClick={handleCep}>
                Salvar
              </Button>
            </div>
        </div>
        <img src={Dataflow} />
      </div>
    </div>
  );
}
