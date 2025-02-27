import React from 'react'
import Asesoria from "../assets/Asesoria.svg"
import Cotizacion from "../assets/Cotizacion.svg"
import Itinerario from "../assets/Itinerario.svg"
import Veterinaria from "../assets/Veterinaria.svg"
import Viaje from "../assets/Viaje.svg"
import Fecha from "../assets/Fecha.svg"
import blob from "../assets/blob.svg"
const Services = () => {
  return (
    <div>
    <div class="py-16 bg-teal-100">  
        <div class=" container m-auto px-6 text-gray-500 md:px-12 xl:px-12">

            <div class=" mx-auto grid gap-12 md:w-4/5 lg:grid-cols-3 h-auto">
                
                <div class=" bg-hero bg-contain bg-no-repeat h-96 px-8 py-12 sm:px-12 lg:px-8 grid grid-cols-1 justify-items-center">
                    <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900 text-center">1. Comunícate para una asesoría personalizada</h3>
                        {/* <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p> */}
                        {/* <a href="#" class="block font-medium text-purple-600">Know more</a> */}
                    </div>
                    <img src= {Asesoria} class="  z-50 w-3/4 -mb-12" alt="asesoria" loading="lazy" width="900" height="600"/>
                </div>
                <div class=" px-8 py-12 sm:px-12 lg:px-8 grid grid-cols-1 justify-items-center">
                    <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900 text-center">2. Solicita tu Cotización</h3>
                        {/* <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p> */}
                        {/* <a href="#" class="block font-medium text-purple-600">Know more</a> */}
                    </div>
                    <img src={Cotizacion} class= " w-1/2 -mb-12" alt="cotizacion" loading="lazy" width="900" height="600"/>
                </div>
                <div class="bg-transparent px-8 py-12 sm:px-12 lg:px-8 grid grid-cols-1 justify-items-center">
                    <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900 text-center">3. Elige la modalidad de viaje</h3>
                        {/* <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p> */}
                        {/* <a href="#" class="block font-medium text-purple-600">Know more</a> */}
                    </div>
                    <img src={Itinerario} class="w-3/4 -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
                </div>
                <div class="bg-transparent px-8 py-12 sm:px-12 lg:px-8 grid grid-cols-1 justify-items-center">
                    <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900 text-center">1. Comunícate para una asesoría personalizada</h3>
                        {/* <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p> */}
                        {/* <a href="#" class="block font-medium text-purple-600">Know more</a> */}
                    </div>
                    <img src={Veterinaria} class="w-3/4 -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
                </div>
                <div class="bg-transparent px-8 py-12 sm:px-12 lg:px-8 grid grid-cols-1 justify-items-center">
                    <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900 text-center">1. Comunícate para una asesoría personalizada</h3>
                        {/* <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p> */}
                        {/* <a href="#" class="block font-medium text-purple-600">Know more</a> */}
                    </div>
                    <img src={Fecha} class="w-1/2 -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
                </div>
                <div class="bg-transparent px-8 py-12 sm:px-12 lg:px-8 grid grid-cols-1 justify-items-center">
                    <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900 text-center">1. Comunícate para una asesoría personalizada</h3>
                        {/* <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p> */}
                        {/* <a href="#" class="block font-medium text-purple-600">Know more</a> */}
                    </div>
                    <img src={Viaje} class="w-3/4 -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default Services