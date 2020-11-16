import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  makeStyles,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import InputMask from "react-input-mask";

import "./event.css";
import api from "../../services/api";
import Logo from "../../assets/flairs logo.png";
import Dataflow from "../../assets/DataFlow2.jpg";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Event() {
  const history = useHistory();
  async function handleCep(e) {
    e.preventDefault();
    try {
      const response = await api.get("");
      history.push("/");
      alert(`${response}`);
    } catch {
      alert(`Cadastrado com sucesso!`);
    }
  }

  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="corpo">
      <div className="header">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Link className="client-link" to="/customer">
            <Button>Cadastro Cliente</Button>
          </Link>
          {/* <Link className="client-link" to="/event"> */}
            <Button disabled="true">Cadastro Evento</Button>
          {/* </Link> */}
          <Link className="client-link" to="/user">
            <Button>Cadastro Usuário</Button>
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
        <div className="card-evento">
          <h3>Cadastro de Evento</h3>
          <div className="col3">
            <TextField id="name" label="Nome" variant="standard" />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Tipo</InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: "Tipo de Evento",
                  id: "age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Tipo 1"}>Tipo 1</option>
                <option value={"Tipo 2"}>Tipo 2</option>
                <option value={"Tipo 3"}>Tipo 3</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Proposta</InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: "Tipo de Evento",
                  id: "age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Tipo 1"}>Prop. 1</option>
                <option value={"Tipo 2"}>Prop. 2</option>
                <option value={"Tipo 3"}>Prop. 3</option>
              </Select>
            </FormControl>
          </div>
          <div classname="col4">
            <InputMask mask="99/99/9999" disabled={false} maskChar=" ">
              {() => (
                <TextField
                  id="phone"
                  label="Data do Evento"
                  variant="standard"
                  placeholder=""
                />
              )}
            </InputMask>
            <InputMask mask="99/99/9999" disabled={false} maskChar=" ">
              {() => (
                <TextField
                  id="phone"
                  label="Data Parcela"
                  variant="standard"
                  placeholder=""
                />
              )}
            </InputMask>
            <TextField
              id="name"
              label="Nº Convidados"
              type="number"
              variant="standard"
            />
            <TextField
              id="name"
              label="Nº Horas"
              type="number"
              variant="standard"
            />
          </div>
          <div classname="col4">
            <TextField
              id="name"
              type="number"
              label="Valor Van (R$)"
              variant="standard"
            />
            <TextField
              id="name"
              type="number"
              label="Valor Hotel (R$)"
              variant="standard"
            />
            <TextField
              id="name"
              type="number"
              label="Distância (Km)"
              variant="standard"
            />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">BV</InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: "Tipo de Evento",
                  id: "age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Tipo 1"}>Sim</option>
                <option value={"Tipo 2"}>Não</option>
              </Select>
            </FormControl>
          </div>
          <div className="col3">
          <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Royalts</InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: "Tipo de Evento",
                  id: "age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Tipo 1"}>Sim</option>
                <option value={"Tipo 2"}>Não</option>
              </Select>
            </FormControl>
            <TextField
              id="name"
              type="number"
              label="Alimentação Extra (R$)"
              variant="standard"
            />
            <TextField
              id="name"
              type="number"
              label="Despesa de Criação (R$)"
              variant="standard"
            />
          </div>
          <div className="col3">
          <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Pagamento</InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: "Tipo de Evento",
                  id: "age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Tipo 1"}>Dinheiro</option>
                <option value={"Tipo 2"}>Cartão</option>
                <option value={"Tipo 3"}>Cheque</option>
              </Select>
            </FormControl>
            <TextField
              id="name"
              label="Quantidade de Bares"
              type="number"
              variant="standard"
            />
            <span>5,94</span>
          </div>
          <div className="buttonv"></div>
          <Button variant="contained" color="primary" onClick={handleCep}>
            Cadastro
          </Button>
        </div>
        <img src={Dataflow} />
      </div>
    </div>
  );
}
