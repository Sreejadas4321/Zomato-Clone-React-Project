import Homepage from "./pages/Homepage";
import MainHomePage from "./pages/MainHomePage";
import {BrowserRouter as  Routes, Route, BrowserRouter} from "react-router-dom"


function App() {
  return (
    // <Router>
    <BrowserRouter>
    <Routes>
      <Route exact path= "/" element={<MainHomePage/>}></Route>
      <Route exact path= "/details" element={<Homepage/>}></Route>
    </Routes>
    </BrowserRouter>
  /* </Router> */
  )
}

export default App;
