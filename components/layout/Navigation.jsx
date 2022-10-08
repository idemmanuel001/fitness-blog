import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';


const links = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Marathon', href: '/marathon' },
  { title: 'Contact', href: '/contact' }
];



//Setting custom style for active nav link
const activeLink = (url, pathname) => pathname === url ? 'text-dark-green font-semibold' : 'text-dark-gray font-semibold cursor-pointer hover:text-gray-500 transition-all duration-500 ease-in-out';

const Navigation = () => {
  return (
    <nav className='z-50 w-full h-fit'>
      <DestopNav />
      <MobileNav />
    </nav>
  );

};


/* Destop Navigation */
const DestopNav = () => {
  const router = useRouter();

  return (
    <ul className='items-center justify-end hidden md:flex'>
      {links.map(link => {
        return (
          <Link key={link.title} href={link.href} >
            <li className={activeLink(link.href, router.pathname) + ' ml-2'}>
              {link.title}
            </li>
          </Link>
        );
      })}

    </ul>
  );
};


/* Mobile Navigation */
const MobileNav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef(null);


  /* Handling the clicks outise the mobile  menu navigation to close the nav pane */
  useEffect(() => {
    let clickOutsideHandler = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', clickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
    };
  });

  return (
    <div
      ref={mobileNavRef}
      className='flex flex-col bg-white h-fit md:hidden'>
      <div className='flex flex-col'>

        {/* Hambuger menu icon button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type='button'
          aria-controls='mobile-menu'
          aria-expanded='false'
          className='flex items-center self-end justify-center w-6 h-6 transition-all duration-500 ease-in-out text-raisin-black hover:text-dark-green active:text-dark-green'>

          <span className='sr-only'>Open main menu</span>
          {isOpen ?
            <RiCloseFill
              className='w-6 h-6 transition-all duration-300 ease-in-out ' />
            : <RiMenu4Fill
              className='w-6 h-6' />}
        </button>

      </div>
      <div className='absolute left-0 w-full h-fit top-10'>
        {isOpen && (

          /* Navigation menu pane */
          <div className='w-screen p-4 bg-white shadow h-fit'>
            <ul className="flex flex-col items-start justify-between">
              {links.map(link => {
                return (
                  <Link key={link.title} href={link.href} >
                    <li
                      onClick={() => setIsOpen(false)}
                      className={activeLink(link.href, router.pathname) + ' mt-2'}>
                      {link.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};




export default Navigation;