import AlgunosTrabajos from './Algunostrabajos';
import Contacto from './Contacto';
import Cursos from './Cursos';
import Navigation from './NavBar';
import SobreMi from './Sobremi';
import './style.css';


function Portada() {
    return(
    <div key={0}>
        <Navigation/>
        <SobreMi/>
        <Cursos/>
        <AlgunosTrabajos/>
        <Contacto/>
        
    </div>  
    );

}

export default Portada;