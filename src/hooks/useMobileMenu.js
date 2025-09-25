import { useState, useEffect, useRef } from 'react';

const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const navLinksElement = navLinksRef.current;
    if (!navLinksElement) return;

    const handleNavLinkClick = () => setIsMenuOpen(false);

    const links = navLinksElement.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return {
    isMenuOpen,
    toggleMenu: () => setIsMenuOpen(prev => !prev),
    hamburgerRef,
    navLinksRef,
  };
};


export default useMobileMenu;
