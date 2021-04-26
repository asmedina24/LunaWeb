import '../css/home.css';
import {Link} from 'react-router-dom';
import BarraNavegacion from '../components/BarraNavegacion.jsx';

const Home = () => {
    return (
        <div>
          <BarraNavegacion></BarraNavegacion>
            <div className="foto1">
                <div className="letrero1">
                    Bienvenidos
                   
                </div>
                <div className="letrero2">
                    Luna Import
                </div>
                <div className="letrero3">
                    Mcbo
                </div>
               
            </div>
            <section>
                <h1>Luna Import</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex porro nulla harum deserunt iste accusamus quibusdam unde blanditiis ratione natus inventore, eaque fugit fuga eligendi magnam! Minima, eum quae!</p>
            </section>

            <div className="foto2">
              

            </div>
            <section className="Dark">
                <h2>Siempre Disponibles para TI</h2>
           
            </section>

            <div className="foto3"> 
           
            </div>
            <section className="Dark">
                
                <h2> Para ver todos los productos Ingresa aqui</h2>
                <Link className="Link"to="/Productos">Productos</Link>

            </section>

            <div className="foto4">
           

            </div>
      
        </div>
     )

}

export default Home;