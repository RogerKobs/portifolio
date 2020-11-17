import Routes from './routes';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   palette: {
//     primary: { main: '#' },
//     secondary: { main: '#' },
//     tercery: { main: '#' }
//   }
// })


function App() {
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme} > */}
        <Routes />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
