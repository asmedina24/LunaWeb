import BarraNavegacion from '../components/BarraNavegacion.jsx';
import {Card, CardTitle, CardText, CardBody, CardImg, CardSubtitle, Col} from 'reactstrap';


const Productos = () => {
    return (
        <div>
            <BarraNavegacion></BarraNavegacion>
            <p>Productos disponibles para tí</p>
            <Col sm="6">
        <Card body outline color="success" >
           <CardImg  />
           <CardBody>
               <CardTitle> <b>Nombre:</b>               
               </CardTitle>
               <CardSubtitle><b>Valor de:</b> </CardSubtitle>
               <CardText> </CardText>
            </CardBody>
        </Card>
        </Col>


        </div>
    )
}

export default Productos;