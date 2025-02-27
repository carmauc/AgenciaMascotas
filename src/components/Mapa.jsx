import React from 'react'

const Mapa = () => {
  return (
    <>
    <div className='relative bg-teal-600 md:pt-14 sm:flex items-center justify-center'>
 <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" class="w-full xl:h-full h-96 object-fill  block  brightness-200" />
            {/* <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" class="sm:hidden -mt-10 block w-full h-96 object-cover  absolute z-0" /> */}
                  {/* Pin for España */}
        <div className='absolute top-[44%] left-[47%] transform -translate-x-1/2 -translate-y-1/2'>
          <div className='relative group flex items-center justify-center'>
            <div className='bg-red-600 w-3 h-3 rounded-full animate-ping'></div>
            <div className='bg-red-600 w-3 h-3 rounded-full absolute'></div>
            <span className='absolute mt-6 text-white'>España</span>
              {/* Tooltip */}
              <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded shadow-lg z-10'>
              <p><strong>Dirección:</strong> Calle Falsa 123, Madrid</p>
              <p><strong>Contacto:</strong> +34 123 456 789</p>
            </div>
          </div>

    </div>

    </div>
   </>
  )
}

export default Mapa
