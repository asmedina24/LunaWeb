
import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../src/components/Home.jsx';
import Contacto from '../src/components/Contacto.jsx';
import QuienesSomos from '../src/components/QuienesSomos.jsx';
import Productos from '../src/components/Productos.jsx';

function App() {

  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/Inicio">
        <Home></Home>
      </Route>
      <Route path="/Contacto">
        <Contacto></Contacto>
      </Route>
      <Route path="/QuienesSomos">
        <QuienesSomos></QuienesSomos>
      </Route>
      <Route path="/Productos">
        <Productos></Productos>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
