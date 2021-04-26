import {Link} from 'react-router-dom';
import '../css/home.css';


const BarraNavegacion = () => {
    return (
        <div className="Navegacion"> 
            <div className="Div-Img-Logo">
                {/* <img className="Img-Home" src= {logoLunaImport} alt=""/> */}
            </div>
            <div className="Barra-Navegacion">
                <Link to="/Inicio">Inicio</Link>
                <Link to="/Productos">Productos</Link>
                <Link to="/QuienesSomos">Quienes Somos</Link>
                <Link to="/Contacto">Contactanos</Link>
            </div>
        </div>
         )

}

export default BarraNavegacion;