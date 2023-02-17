import React, { useContext } from 'react';
import { Link } from '@chakra-ui/react';
import { NavLinkProps } from '../models/Props';
import { SiteContext } from '../context/SiteContext';

const NavLink: React.FC<NavLinkProps> = ({ text, fontSize }) => {
  const { setIsHovering } = useContext<any>(SiteContext);

  return (
    <Link
      fontSize={fontSize && `${fontSize}px`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {text}
    </Link>
  );
};

export default NavLink;
