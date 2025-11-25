/*import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { pricesArray } from '../../utils/pricesArray';
import './Pricing.css'

export const Pricing = () => {

    const [openService, setOpenService] = useState(null)
    const navigate = useNavigate();

    const handleGoBack = () => { navigate('/')}

    return (
      <section id='pricingSection'>
        <h2 className='pricingH2' onClick={handleGoBack}>TARIFAS</h2>
        <div className='pricesContainer'>
          {pricesArray.map((item) => (
            <div key={item.id}>
            <button className={`service ${openService === item.id ? "open" : ""}`}
            onClick={() => setOpenService(openService === item.id ? null : item.id)}>
            <h2 className="serviceH2" data-i18n={`service-${item.service}`}>{item.service} <span className='quantity'>{item.price}</span></h2>
            <img
              className="pricesContainerButtonImg"
              src="/assets/icons/flecha-hacia-abajo.webp"
              alt="botón abrir servicio"
            />
            </button>

            <div className={`serviceDescriptionDiv ${openService === item.id ? "open" : ""}`}>
              <p className="serviceDescription">{item.text}</p>
            </div>
        </div>
        
        ))}  
        <span className='taxes'>Todos los precios incluyen IVA</span>      
      </div>
      <h2 className='vuelta' onClick={handleGoBack}>VOLVER</h2>
      </section>
    );
}




    
   */