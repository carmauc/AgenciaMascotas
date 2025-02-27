import { useState, useRef, useEffect } from 'react';
import Logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import Servicios from '../pages/Servicios';
import Banderas from './Banderas';




const navigation = [
  { name: 'Inicio', href: '/', current: true },
  // {<Link to='/servicios' name='Servicios'/>},
  // <Link to='/servicios'>Servicios</Link>,
  { name: 'Servicios', href: '/servicios', current: false },
  {  
    name: 'Testimonios', 
    href: '#', 
    current: false, 
    submenu: [
      { name: 'Traslados', href: '#' },
      { name: 'Viajes', href: '#' }
    ]  
  },
  { name: 'Cotizacion', href: '/cotizacion', current: false },
  { 
    name: 'Acerca De', 
    href: '#', 
    current: false, 
    submenu: [
      { name: 'Nosotros', href: '#' },
      { name: 'Equipo', href: '#' },
      { name: 'Contacto', href: '/contacto' }
    ] 
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const navRef = useRef(null);

  const toggleSubMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className=" bg-gray-700 fixed z-50 w-full" ref={navRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link className="flex-shrink-0" to='/'>
              <img className="block h-10 w-auto" src={Logo} alt="Mascofly" />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(index)}

                >
                  <Link
                    to={item.href}
                    className={`${
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                    onClick={() => toggleSubMenu(index)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && activeMenu === index && (
                    <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-48 sm:px-0"
                    onMouseLeave={() => setActiveMenu(null)}

                    >
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-600"
                            >
                              <div className="flex-shrink-0">
                                {/* Inserta un icono o cualquier otro indicador para los elementos del submenú */}
                              </div>
                              <div className="space-y-1">
                                <p className="text-base font-medium text-gray-300">{subItem.name}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Botón del menú móvil */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex sm:hidden items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              )}
            </button>
          </div>
          <Banderas />
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item, index) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`${
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => toggleSubMenu(index)}
                >
                  {item.name}
                </Link>
                {item.submenu && activeMenu === index && (
                  <div className="px-4 py-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`${
                          subItem.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } block px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;