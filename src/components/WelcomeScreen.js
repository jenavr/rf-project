import React from 'react';
import Logo from '../images/logotipo.png';

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 pt-10">
      <img className='object-contain h-72 w-144' src={Logo} alt="Logo" />
      <br></br>
      <p className='text-6xl font-semibold'>Proveedor de suministros</p>
      <p className='text-6xl font-semibold'>industriales</p>
    </div>
  );
};

export default WelcomeScreen;