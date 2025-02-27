import React from 'react';

const Kenell = () => {
  return (
    <section className='bg-[url(/background.svg)] bg-cover bg-fixed'>
      <div className="max-w-6xl px-4 pt-28 lg:pt-40 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl md:max-w-max">
          <div className="space-y-5 md:space-y-10 text-neutral-100 font-semibold">

            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl text-center pb-8 text-white">
                Como elegir el Kenell adecuado para mi mascota
              </h2>
              <p className="text-lg">
                Es importante que elija el contenedor del tamaño adecuado para que viaje su mascota. Debe asegurarse de que su mascota tenga suficiente espacio para girar normalmente mientras está de pie, para poder pararse y sentarse erguido y para acostarse en una posición natural. Podemos informarle sobre la talla correcta, pero primero necesitamos algunas tallas para asesorarle correctamente. Disponemos de contenedores de viaje adecuados a un precio justo, para que no tenga que buscar más. Después de la compra podemos enviártelo a tu casa en el plazo de una semana para que tu mascota se adapte a él antes del vuelo.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="mt-20 text-2xl md:text-3xl text-start pb-4 text-white">
                Contenedores de viaje según normativa IATA
              </h3>
              <p className="text-lg">
                Disponemos de contenedores de seis tamaños.
              </p>
              <ul className="list-disc list-outside space-y-1 ps-5 text-lg">
                <li>P-100 - Pequeño</li>
                <li>P-200 – Mediano</li>
                <li>P-300 – Intermedio</li>
                <li>P-400 – Grande</li>
                <li>P-500 – Extra Grande</li>
                <li>P-700 – Gigante</li>
              </ul>
              <p className="text-lg italic">
                * Para las mascotas mas grandes, ofrecemos cajas de madera hechas a medida. Tenga en cuenta que nuestro carpintero necesita aprox. ¡2 semanas para construir!
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="mt-20 text-2xl md:text-3xl text-start pb-4 text-white">
                Como Medir a mi mascota
              </h3>
              <p className="text-lg">
                Primero mida la longitud y la altura de su mascota según la ilustración.
              </p>
            </div>

            <figure>
              <img
                className="w-full object-cover rounded-xl"
                src="https://res.cloudinary.com/dmurguugh/image/upload/v1719143440/Agencia%20de%20Viajes/Medidas_d00hof.jpg"
                alt="Image Description"
              />
            </figure>

            <blockquote>
              <ul className="list-disc list-outside space-y-4 ps-5 text-lg">
                <li className="ps-2">
                  Longitud desde la punta de la nariz hasta la base de la cola (A)
                </li>
                <li className="ps-2">
                  Altura estando de pie en posición normal, desde el suelo hasta la coronilla (D)
                </li>
              </ul>
              <p className="text-lg mt-5 italic">
                Los gatos que pesan menos de 4 kg viajan en talla pequeña.
              </p>
              <p className="text-lg italic">
                Los gatos que pesan 4 kg o más y las razas de nariz chata viajan en tamaño mediano.
              </p>
            </blockquote>

            <div className="space-y-3">
            <h3 className="mt-20 text-2xl md:text-3xl text-start pb-4 text-white">
            Construcción</h3>
              <p className="text-lg text-gray-800 dark:text-neutral-200">
                Además del tamaño, la construcción debe cumplir con normas específicas. Estos se pueden encontrar en el <a className="text-blue-600 decoration-2 hover:underline font-medium text-orange-500" href="#">Reglamento de animales vivos de la IATA</a>. En resumen, el contenedor debe ser:
              </p>
            </div>
            <ul className="list-disc list-outside space-y-2 ps-5 text-lg">
              <li className="ps-2">Robusto, impermeable y bien ventilado.</li>
              <li className="ps-2">Carcasa superior e inferior atornilladas (SIN sistema de clic)</li>
              <li className="ps-2">Puerta de barra metálica</li>
              <li className="ps-2">Cerradura de puerta segura (SIN candados)</li>
            </ul>

            <div class="container px-6 py-5 mx-auto">
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div class="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                {/* <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600">    </div> */}
                <img
                className="w-full object-cover rounded-xl h-64 bg-white"
                src="https://res.cloudinary.com/dmurguugh/image/upload/v1719139360/Agencia%20de%20Viajes/Guacal500_zqyaka.png"
                alt="Kenell p500"
              />
                <h4 className="text-xl uppercase text-center mt-4 text-teal-100">Correcto</h4>
        

            </div>
            <div class="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img
                className="w-full object-cover rounded-xl h-64"
                src="https://res.cloudinary.com/dmurguugh/image/upload/v1719139376/Agencia%20de%20Viajes/Jaula_yhc4bl.jpg"
                alt="Kenell incorrecto para viajar"
              />
                <h4 className="text-xl uppercase text-center mt-4 text-red-500">Incorrecto</h4>
            </div>

            <div class="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img
                className="w-full object-cover rounded-xl h-64"
                src="https://res.cloudinary.com/dmurguugh/image/upload/v1719139372/Agencia%20de%20Viajes/Transportin-Praktiko-Plastico-para-Gato-y-Perro-Pequenos-48cm_ysuenf.webp"
                alt="Kenell incorrecto para viajar"
              />
                <h4 className=" text-xl uppercase text-center mt-4 text-red-500">Incorrecto</h4>
            </div>
        </div>
    </div>

            <div className="space-y-3">
            <h3 className="mt-20 text-2xl md:text-3xl text-start pb-4 text-white">
                Bueno Saber</h3>
              <ul className="list-disc list-outside space-y-2 ps-5 text-lg">
                <li className="ps-2">
                  Cuando una caseta de transporte ha sido aprobada en el pasado, esto no es garantía de que será aceptada en el futuro.
                </li>
                <li className="ps-2">
                  La caseta de transporte será suya después de la compra; no es posible alquilarla.
                </li>
                <li className="ps-2">
                  Si ya dispones de una caseta de transporte podemos decirte si es apta para el transporte aéreo de tu mascota.
                </li>
                <li className="ps-2">
                  Cuando nos envíes las medidas exactas más una foto del frente y una foto del costado podremos darte asesoramiento directo.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kenell;

