import { Link } from 'react-router-dom'
import imagen from '../../public/img/images.jpg'
const HeaderAu = () => {
    return (
        <header className="py-10 bg-teal-700">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <h1 className="font-bold text-6xl text-white text-center">
                    Clínica {''} 
                    <span className="text-white font-black">M@C</span> 
                </h1>
                <img style={{ width: 250, height: 100, marginBottom: 5 }} src={imagen} alt="imagen sobre nosotros" className='float-right' />
            </div>

        </header>
    )
};

export default HeaderAu;
