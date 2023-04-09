import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import imagen1 from '../../public/img/portapapeles.png'
import imagen2 from '../../public/img/usuario-de-perfil.png'
const Header = () => {

    const { cerrarSesion } = useAuth()
  return (
        <header className="py-10 bg-teal-700">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <h1 className="font-bold text-2xl text-white text-center">
                    Administrador de Pacientes de la {''} 
                    <span className="text-black font-black">Clinica M@C</span> 
                </h1>

                <nav className='flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0'>
                    <Link to="/admin" className='text-white text-sm uppercase font-bold text-justify'><img style={{ width: 30, height: 25   }} src={imagen1} alt="imagen sobre nosotros" className='float-right' />Pacientes</Link>
                    <Link to="/admin/perfil" className='text-white text-sm uppercase font-bold'> <img style={{ width: 30, height: 25   }} src={imagen2} alt="imagen sobre nosotros" className='float-right' />Perfil</Link>

                    <button 
                        type="button"
                        className='text-white text-sm uppercase font-bold'
                        onClick={cerrarSesion}
                    >Cerrar Sesión</button>
                </nav>
            </div>

        </header>
  )
};

export default Header;
