import AlgunosTrabajos from './Algunostrabajos';
import Contacto from './Contacto';
import Cursos from './Cursos';
import Navigation from './NavBar';
import SobreMi from './Sobremi';
import './style.css';

function Portada() {
    return(
        <>
        <Navigation/>
        <SobreMi/>
        <Cursos/>
        <AlgunosTrabajos/>
        <Contacto/>
        </>
    );

}

export default Portada;