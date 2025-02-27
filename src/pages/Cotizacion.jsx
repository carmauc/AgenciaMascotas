import {useState} from 'react'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next';

const Cotizacion = () => {
  const { t } = useTranslation();
  const [paquete, setPaquete] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [aeropuertoOrigen, setAeropuertoOrigen] = useState('');
    const [aeropuertoDestino, setAeropuertoDestino] = useState('');
    const [fecha, setFecha] = useState('');

    const [mascota, setMascota] = useState('');
    const [especie, setEspecie] = useState('');
    const [raza, setRaza] = useState('');
    const [edad, setEdad] = useState('');
    const [meses, setMeses] = useState('');
    const [sexo, setSexo] = useState('');
    const [peso, setPeso] = useState('');


    const [alto, setAlto] = useState('');
    const [largo, setLargo] = useState('');



    const [kenell, setKenell] = useState('');
    const [medidasK, setMedidasK] = useState('');

    const [archivo, setArchivo] = useState(null);
    const [comentario, setComentario] = useState(null);

    
  const [submitClicked, setSubmitClicked] = useState(false); // state para mostrar los errores al hacer click
//   const [resetForm, setResetForm] = useState(false); // state para reiniciar formulario al enviar




      
  const handleArchivoChange = (e) => {
    setArchivo(e.target.files[0]);
  };

      // formatear string que devuelve el input de tipo Date
      const formatearFecha = fechaInput => {
        const partesFecha = fechaInput.split('-');
        const fechaFormateada = partesFecha[2] + '-' + partesFecha[1] + '-' + partesFecha[0];
        return fechaFormateada
      }




      const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitClicked(true);    
        if ([mascota, raza, especie, sexo, nombre, correo, telefono, aeropuertoDestino, aeropuertoOrigen, fecha].includes('')) {    
            Swal.fire({
            icon: "error",
            title: "Todos los campos son Obligatorios",
            customClass: {
                confirmButton: 'text-white bg-teal-500 hover:bg-teal-500',
             }
          });
          return;
    }
      }
    //   let timerInterval;
    //   Swal.fire({
    //     title: "Enviando..",
    //     timer: 3000,
    //     didOpen: () => {
    //       Swal.showLoading();
    //       const timer = Swal.getPopup().querySelector("b");
    //       timerInterval = setInterval(() => {
    //         timer.textContent = `${Swal.getTimerLeft()}`;
    //       }, 100);
    //     },
    //     willClose: () => {
    //       clearInterval(timerInterval);
    //     }
    //   }).then((result) => {
    //     /* Read more about handling dismissals below */
    //     if (result.dismiss === Swal.DismissReason.timer) {
    //       return;
    //     }
    //   });
    
        // try {
        //   const formData = new FormData();
                //   formData.append('paquete', paquete);
        //   formData.append('mascota', mascota);
        //   formData.append('especie', especie);
        //   formData.append('raza', raza);
        //   formData.append('sexo', sexo);
    
        //   formData.append('nombre', nombre);
        //   formData.append('correo', correo);
        //   formData.append('telefono', telefono);
        //   formData.append('fecha', fecha);
        //   formData.append('aeropuertoDestino', aeropuertoDestino);
        //   formData.append('aeropuertoOrigen', aeropuertoOrigen);

        //   formData.append('archivo', archivo);
          

    
    
    //       const response = await api.enviarFormulario(formData);
    //       console.log(response); // Manejar la respuesta del servidor
    //   Swal.fire({
    //     title: '¡Enviado!',
    //     text: 'Tu formulario ha sido enviado con éxito.',
    //     icon: 'success',
    //     confirmButtonText: 'OK',
    //   });
    //      // Manejar errores al enviar el formulario
    //      setResetForm(true);
    //     } catch (error) {
    //       console.error('Error al enviar el formulario:', error.message);
    //       Swal.fire({
    //         title: '¡Error en el Servidor!',
    //         text: 'Tu formulario no ha sido enviado.',
    //         icon: 'error',
    //         confirmButtonText: 'OK',
    //       });
    //     }
    //   };
    
    //   useEffect(() => {
    //     if (resetForm) {
    //       // Reiniciar todos los estados a sus valores iniciales
        //       setPaquete('');
    //       setMascota('');
    //       setEspecie('');
    //       setRaza('');
    
    //       setSexo('');    
    //       setNombre('');
    //       setCorreo('');
    //       setTelefono('');  
    //       setFecha('');      
    //       setAeropuertoDestino('');      
    //       setAeropuertoOrigen('');      
    //       setArchivo('');
    //       setSubmitClicked(false);
    //       // Desactivar el estado de reinicio
    //       setResetForm(false);
    //     }
    //   }, [resetForm]);

  return (
		<section className='bg-[url(/background.svg)] bg-cover bg-fixed '>
			<div class='container md:px-16 md:py-48 mx-auto'>
				<div class='p-4 py-6 rounded-lg bg-gray-700 md:p-8 shadow  md:w-3/4 mx-auto px-5  text-white'>
					<h1 className='font-bold text-4xl text-white text-center'>
          {`${t('tituloCotizacion')}`}
					</h1>
					<p className='text-center text-lg my-8 text-slate-200'>
          {`${t('descripcionCotizacion')}`}
					</p>
					<form onSubmit={handleSubmit}>
						<div className='mt-10 mb-4'>
							<label className='block mb-2 text-sm text-gray-200'>
              {`${t('cotizacion')}`}
							</label>
							<select
								value={paquete}
								className='block  w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
								onChange={e => setPaquete(e.target.value)}>
								<option value=''> </option>
								<option value='Basico'>Básico</option>
								<option value='Premium'>Premium</option>
								<option value='Personalizado'>Personalizado</option>
							</select>
						</div>
						<div class='-mx-2 md:items-center md:flex'>
							<div class='flex-1 px-2'>
								<label class='block  mb-2 text-sm text-gray-200'>
                {`${t('nombre')}`}
								</label>
								<input
									type='text'
									placeholder='John '
									onChange={e => setNombre(e.target.value)}
									className='block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
								/>
							</div>

							<div class='flex-1 px-2 mt-4 md:mt-0'>
								<label class='block mb-2 text-sm text-gray-200'>
                {`${t('apellido')}`}
								</label>
								<input
									type='text'
									placeholder='Doe'
									onChange={e => setApellido(e.target.value)}
									className='block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
								/>
							</div>
						</div>

						<div class='mt-4'>
							<label class='block mb-2 text-sm text-gray-200'>
              {`${t('email')}`}

							</label>
							<input
								type='email'
								placeholder='johndoe@example.com'
								onChange={e => setCorreo(e.target.value)}
								className='block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
							/>
						</div>

						<div className='mt-4 mb-8'>
							<label className='block mb-2 text-sm text-gray-200'>
              {`${t('telefono')}`}
							</label>
							<input
								class='block w-full px-5 py-2.5 mt-2  text-white placeholder-gray-400 bg-gray-600 border border-gray-200 rounded-lg   dark:text-gray-300 dark:border-gray-700 focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
								placeholder=' +34607000000'
								onChange={e => setTelefono(e.target.value)}
							/>
						</div>

						<legend className=' mt-5 mb-4 w-full p-2 uppercase font-bold text-white text-md text-center rounded-md'>
            {`${t('viaje')}`}
						</legend>

						<div class='mt-4'>
							<label className='block mb-2 text-sm text-gray-200'>
              {`${t('aeropuertoO')}`}
							</label>
							<input
								type='text'
								placeholder='Aeropuerto Internacional José María Córdova'
								onChange={e => setAeropuertoOrigen(e.target.value)}
								className='block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
							/>
						</div>
						<div class='mt-4'>
							<label class='block mb-2 text-sm text-gray-200'>
              {`${t('aeropuertoL')}`}
							</label>
							<input
								type='text'
								placeholder='Aeropuerto Adolfo Suárez Madrid-Barajas'
								onChange={e => setAeropuertoDestino(e.target.value)}
								className='block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
							/>
						</div>

						<div className='mt-4 mb-8'>
							<label className='block mb-2 text-sm text-gray-200'>
              {`${t('fecha')}`}
							</label>
							<input
								id='salida'
								type='date'
								className='block md:w-1/4 px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
								onChange={e => setFecha(formatearFecha(e.target.value))}
							/>
						</div>

						<legend className=' mt-5 mb-4 w-full p-2 uppercase font-bold text-white text-md text-center rounded-md'>
            {`${t('mascota')}`}
						</legend>
						<div className='mt-4 mb-10'>
							<label className='block mb-2 text-sm text-gray-200'>
              {`${t('cantidad')}`}
							</label>
							<select
								className='block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
								onChange={e => setCantidad(e.target.value)}>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
							</select>
						</div>



						<div className='mt-4'>
							<label className='block mb-2 text-sm text-gray-200'>
              {`${t('mascotaName')}`}
							</label>
							<input
								id='mascota'
								type='text'
								className='block md:w-1/4 px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
								placeholder='Nombre de la Mascota'
								name='mascota'
								value={mascota}
								onChange={e => setMascota(e.target.value)}
								required='required'
							/>
						</div>

						<div className='mt-4'>
							<label
								htmlFor='mascota'
								className='block mb-2 text-sm text-gray-200'>
                {`${t('mascotaType')}`}
                </label>
							<div className='flex justify-items-start gap-4'>
								<div className='flex items-center w-20 pl-4 mt-2 '>
									<input
										type='radio'
										value='Canino'
										className='w-6 h-4 accent-teal-400 cursor-pointer'
										checked={especie == 'Canino' ? true : false}
										onChange={e => setEspecie(e.target.value)}
									/>
									<label className='py-4 ml-2 w-full text-sm font-medium text-gray-200'>
                  {`${t('perro')}`}
									</label>
								</div>

								<div className='flex items-center pl-4 mt-2'>
									<input
										type='radio'
										value='Felino'
										className='w-6 h-4 accent-teal-400 cursor-pointer'
										checked={especie == 'Felino' ? true : false}
										onChange={e => setEspecie(e.target.value)}
									/>
									<label className='py-4 ml-2 w-full text-sm font-medium  text-gray-200 '>
                  {`${t('gato')}`}
									</label>
								</div>
							</div>
						</div>

						<div className='mt-4'>
							<label className='block mb-2 text-sm text-gray-200'>
              {`${t('raza')}`}
              </label>
							<input
								type='text'
								placeholder='Chihuahua'
								className='block w-1/8 px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
								onChange={e => setRaza(e.target.value)}
								required='required'
							/>
						</div>

						<div className='mt-4'>
							<label className='block mb-2 text-sm text-gray-200'>
              {`${t('edad')}`}
                </label>
							<div className='text-gray-800, flex justify-start'>
								<input
									id='edad'
									type='number'
									className='block md:w-1/12 w-1/4 px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
									onChange={e => setEdad(e.target.value)}
								/>
								<select
									id='meses'
									className='block w-1/8 mx-5 px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
									onChange={e => setMeses(e.target.value)}>
									<option value=''> </option>
									<option value='Meses'>{`${t('meses')}`}</option>
									<option value='Años'>{`${t('años')}`}</option>
								</select>
							</div>
						</div>

						<div className='mt-4 mb-8'>
							<label className='block mb-2 text-sm text-gray-200'>
              {`${t('peso')}`}
							</label>
							<input
								id='peso'
								type='number'
								className='block w-1/8 px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
								placeholder='Peso (Kg)'
								name='peso'
								onChange={e => setPeso(e.target.value)}
							/>
						</div>







						<legend className=' mt-5 mb-4 w-full p-2 uppercase font-bold text-white text-md text-center rounded-md'>
							Kenell
						</legend>
						<p className='mt-2 text-sm text-slate-200'>
            {`${t('parrafokenell')}`}
						</p>
						<a className='text-orange-500'>
						{`${t('linkenell')}`}
						</a>

						<div className=' mt-4'>
							<label htmlFor='mascota' className='text-gray-200'>
              {`${t('kenell')}`}
							</label>
							<div className='flex justify-start'>
								<div className='flex items-center w-20 pl-4 mt-2 placeholder-gray-400'>
									<input
										type='radio'
										value='1'
										className='w-6 h-4 accent-teal-400 cursor-pointer'
										checked={kenell == '1' ? true : false}
										onChange={e => setKenell(e.target.value)}
									/>
									<label className='py-4 ml-2 w-full text-sm font-medium text-gray-400'>
                  {`${t('si')}`}
									</label>
								</div>

								<div className='flex items-center w-20 pl-4 mt-2 placeholder-gray-400'>
									<input
										id='kenellNo'
										type='radio'
										value='2'
										className='w-6 h-4 accent-teal-400 cursor-pointer'
										checked={kenell == '2' ? true : false}
										onChange={e => setKenell(e.target.value)}
									/>
									<label className='py-4 ml-2 w-full text-sm font-medium text-gray-400'>
										No
									</label>
								</div>
							</div>
						</div>

						<div className='grid grid-cols-2 gap-20'>
							<div className='mt-4'>
								<label className='block mb-2 text-sm text-gray-200'>
                {`${t('largo')}`}
								</label>
								<input
									type='number'
									className='block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
									placeholder='Longitud (Cm)'
									onChange={e => setLargo(e.target.value)}
								/>
								<p className=' text-gray-300 text-xs'>
                {`${t('parrafoLargo')}`}
								</p>
							</div>
							<div className='mt-4 mb-8'>
								<label className='block mb-2 text-sm text-gray-200'>
                {`${t('alto')}`}
								</label>
								<input
									type='number'
									className='block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
									placeholder='Altura (Cm)'
									onChange={e => setAlto(e.target.value)}
								/>
								<p className=' text-gray-300 text-xs'>
                {`${t('parrafoAlto')}`}
								</p>
							</div>
						</div>

						{kenell == '1' && (
							<div>
								<div className='mt-4 mb-8'>
									<label className='block mb-2 text-sm text-gray-200'>
                  {`${t('kenellMedidas')}`}
									</label>
									<input
										id='kenell'
										type='text'
										className='block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
										placeholder='71x52x54 cm'
										name='Kenell'
										onChange={e => setMedidasK(e.target.value)}
									/>
									<p className=' text-gray-300 text-xs'>
                  {`${t('parrafoKenell2')}`}
									</p>
								</div>

								<div className='mt-8 mb-8'>
									<label className='block mb-2 text-sm text-gray-200'>
                  {`${t('kenellFotografia')}`}
									</label>
									<input
										type='file'
										className='block w-full p-2 mt-2 text-gray-300 text-sm '
										onChange={handleArchivoChange}
									/>
									<p className=' text-gray-300 text-xs'>
                  {`${t('parrafoFotografia')}`}
									</p>
								</div>
							</div>
						)}

						<div class='w-full mt-10'>
							<label class='block mb-2 text-sm text-gray-200'>
              {`${t('comentarios')}`}
							</label>
							<textarea
								className='block w-full h-32 px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-gray-600 border border-gray-700 rounded-lg  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40'
								onChange={e => setComentario(e.target.value)}
							/>
						</div>

						<button
							type='submit'
							value='Enviar'
							class='w-full px-6 py-3 mt-8 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-50'>
              {`${t('buttons.submit')}`}
              </button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Cotizacion