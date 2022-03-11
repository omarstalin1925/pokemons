import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import {
  Column,
  DataGrid,
  FilterRow,
  HeaderFilter,
  GroupPanel,
  Scrolling,
  Editing,
  Grouping,
  Lookup,
  MasterDetail,
  Summary,
  RangeRule,
  RequiredRule,
  StringLengthRule,
  GroupItem,
  TotalItem,
  ValueFormat,
} from "devextreme-react/data-grid";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import {
  consultarPokemonPorAutor,
  insertarPokemon,
  consultarPokemonPorId,
  consultarPokemonNumReg,
  actualizarPokemon,
  eliminarPokemon,
} from "../actions/PokemonActions";

const columns = ["name", "image", "attack", "defense"]; //columnas del grid

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: 20,
  },
  submit: { margintop: 15 },
};

const Pokemon = (props) => {
  const [pokems, setPokems] = useState([]);
  const [status, setStatus] = useState(false);
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  
  const [values, setValues] = React.useState({
    id: 0,
    name: "",
    image: null,
    type: "water",
    hp: 50,
    attack: 10,
    defense: 20,
    idAuthor: 2,
    created_at: "2022-03-10T19:37:31.292Z",
    updated_at: "2022-03-10T19:37:31.292Z",
    buscar_pok:0,
  });

  function guardarPokemon(evt) {
    evt.preventDefault();
    console.log("enviando values a insertar:", values);
    insertarPokemon(values).then((response) => {
      console.log("consulta exitosa:", response);
    });
  }

  function buscarPokemon(evt) {
    evt.preventDefault();
    consultarPokemonPorId(values.buscar_pok).then((response) => {
      setPokems(response.data);
      console.log("consulta exitosa:", response);
    });
  }

  function consultarNumPokemon() {
    //e.preventDefault();
    consultarPokemonNumReg(1).then((response) => {
      //setPokems(response.data);
      console.log("consulta exitosa:", response);
    });
  }

  function actualizarPokemon() {
    //e.preventDefault();
    actualizarPokemon(values).then((response) => {
      //setPokems(response.data);
      console.log("consulta exitosa:", response);
    });
  }

  function eliminarPokemon(idPokemon) {
    //e.preventDefault();
    actualizarPokemon(idPokemon).then((response) => {
      //setPokems(response.data);
      console.log("consulta exitosa:", response);
    });
  }

  useEffect(() => {
    consultarPokemonPorAutor(1).then((response) => {
      setPokems(response.data);
      //console.log("consulta exitosa:",response)
    });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://pokemon-pichincha.herokuapp.com/pokemons?idAuthor=2")
  //     .then((resultado) => {
  //       setPokems(resultado.data);
  //       setStatus(true);
  //     })
  //     .catch((error) => {
  //       setStatus(true);
  //     });
  // }, []);

  
  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  };

  for (let index = 0; index < pokems.length; index++) {
    pokems[index].ID = index;
  }

  console.log("values:", values);
  return (
    <Container component="main" maxWidth="md" jsutify="center">
      <div>
        <form style={style.form}>
          <Grid></Grid>
          <Grid container spacing={1}>
            <Typography component="h1" variant="h5">
              Listado de Pokemon
            </Typography>
            <br></br>
            <br></br>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <TextField
                name="buscar_pok"
                onChange={handleChange}
                value={values.buscar_pok}
                variant="outlined"
                fullWidth
                label="Buscar por codigo"
              />
            </Grid>
            <Grid item xs={12} md={1}>
              <Button
                type="submit"
                onClick={(evt) => {
                  buscarPokemon(evt);
                }}
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                style={style.submit}
              >
                Buscar
              </Button>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
              <DataGrid
                dataSource={pokems}
                keyExpr="ID"
                defaultColumns={columns}
                showBorders={true}
              >
                <FilterRow visible={true} />
                <Editing
                  mode="row"
                  allowAdding={true}
                  allowDeleting={true}
                  allowUpdating={true}
                />
              </DataGrid>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Grid container justify="center">
            <Grid item xs={12} md={4}>
              <Typography component="h1" variant="h5">
                <h3>Nuevo Pokemon</h3>
              </Typography>
            </Grid>
            <br></br>
            <br></br>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <Grid container spacing={1}>
            <Grid item xs={12} md={2}>
              <h3>Nombre:</h3>
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                name="name"
                onChange={handleChange}
                value={values.name}
                variant="outlined"
                fullWidth
                label="Nombre"
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <h3>Ataque:</h3>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Always visible"
                  defaultValue={40}
                  //getAriaValueText={valuetext}
                  step={10}
                  //marks={marks}
                  valueLabelDisplay="on"
                />
              </Box>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <Grid container spacing={1}>
            <Grid item xs={12} md={2}>
              <h3>Imagen:</h3>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="outlined-name"
                name="image"
                onChange={handleChange}
                value={values.image}
                variant="outlined"
                fullWidth
                label="Url"
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <h3>Defensa:</h3>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Always visible"
                  defaultValue={80}
                  //getAriaValueText={valuetext}
                  step={10}
                  //marks={marks}
                  valueLabelDisplay="on"
                />
              </Box>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <Grid container justify="center">
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={4}>
              <Button
                type="submit"
                onClick={(evt) => {
                  guardarPokemon(evt);
                }}
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                style={style.submit}
              >
                Guardar
              </Button>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={4}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                style={style.submit}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </form>
        <form></form>
        <br></br>
        <br></br>
      </div>
    </Container>
  );
};
export default Pokemon;
