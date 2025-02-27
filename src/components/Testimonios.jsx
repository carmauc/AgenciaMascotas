// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Testimonio from "./Testimonio";
function Testimonios() {
  const test = [
    {
        id: 1,
        address: 'https://www.maurovet.com',
        title: 'MauroVet',
        description2: 'Pagina Web desarrollada en Wordpress, implementando ademas HTML y CSS'
    },
    {
        id: 2,
        address: 'https://www.maskotopia.pet',
        title: 'Maskotopia',
        description2: 'E-commerce desarrollado por mi  en Wordpress usando tecnologias de HTML, CSS y JS'

    },
    {
        id: 3,
        address: 'https://www.maskotopia.pet',
        title: 'Maskotopia',
        description2: 'E-commerce desarrollado en Wordpress usando tecnologias de HTML, CSS y JS'

    },
    {
      id: 4,
      address: 'https://www.maskotopia.pet',
      title: 'Maskotopia',
      description2: 'E-commerce desarrollado en Wordpress usando tecnologias de HTML, CSS y JS'

  },
]
  return (
      <Swiper  
      
        cssMode={true}
        style={{
          '--swiper-navigation-color': '#ff7316',
          '--swiper-pagination-color': '#ff7316',
        }}
        // breakpoints={{
        //   // when window width is >= 640px
        //   640: {
        //     // width: 640,
        //     slidesPerView: 1,
        //   },
        //   // when window width is >= 768px
        //   768: {
        //     // width: 768,
        //     slidesPerView: 1,
        //   },
        // }}
        slidesPerView={1}
         spaceBetween={0}
         loop={true}
         pagination={{
           clickable: true,
         }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className=" isolate overflow-hidden bg-[url(/background.svg)] bg-right px-6 py-24 sm:py-32 lg:px-8"
        >
        {test.map(item => (
        <SwiperSlide>
        <Testimonio data={item} key={item.id}  />
        </SwiperSlide>
        
    ))}
      </Swiper>
  );
}

export default Testimonios