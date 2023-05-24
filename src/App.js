import {BrowserRouter, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from "./home";
import Search from "./search";

const defaultTheme = createTheme();

function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
              <div>
                  <Routes>
                      <Route path={"/"} element={<Home/>}/>
                      <Route path={"/search"} element={<Search/>}/>
                  </Routes>

              </div>
          </BrowserRouter>
      </ThemeProvider>

  );
}

export default App;
