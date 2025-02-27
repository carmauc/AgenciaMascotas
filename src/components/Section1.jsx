// import Fondo2 from '../assets/Fondo2.jpg'
import Fondo1 from '../assets/Fondo1.webp'

const Section1 = () => {
	return (
		<section
			id='home'
			className='relative bg-zinc-900 md:min-h-screen h-auto w-auto flex justify-center items-center md:justify-start '>
			<img src={Fondo1} className='w-full h-screen' />
			<h1 className='absolute text-sm right-6 bottom-11 md:text-6xl text-slate-50 md:right-5 md:bottom-64'>
				Caminar nunca fue tan cómodo
			</h1>
		</section>
	)
}

export default Section1