import React from "react";
import { Link, useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

import "./login.css";
import Logo from "../../assets/flairs logo.png";
import Dataflow from "../../assets/DataFlow2.jpg";

export default function Login() {
  return (
    <div className="corpo">
      <div className="cima">
        <img src={Logo} />
      </div>
      <div className="baixo">
        <div className="card">
          <h3>Login</h3>
          <div className="inputs">
            <TextField id="email" label="E-mail" variant="outlined" />
            <TextField id="password" label="Senha" variant="outlined" />
          </div>
          <div className="buttons">
            <Link className="client-link" to="/customer">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
            <Button variant="contained" color="secondary">
              Registrar-se
            </Button>
          </div>
        </div>
        <img src={Dataflow} />
      </div>
    </div>
  );
}
