import logo from "./logo.svg";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import { Button, TextField } from "@material-ui/core";
import Pokemon from "./componentes/pokemon";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Pokemon />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
