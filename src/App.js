import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import Layout from "./components/features/layout/layout";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter className="App">
      <Layout />
    </BrowserRouter>
  );
}

export default App;
