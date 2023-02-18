import React, { useContext } from 'react';
import { Link } from '@chakra-ui/react';
import { NavLinkProps } from '../models/Props';
import { SiteContext } from '../context/SiteContext';
import useLoadingNavigate from '../hooks/UseLoadingNavigate';
import { useNavigate } from 'react-router';

const NavLink: React.FC<NavLinkProps> = ({ text, fontSize, altLink }) => {
  const { setIsHovering, setIsLoading } = useContext<any>(SiteContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (altLink) {
      useLoadingNavigate(altLink, navigate, setIsLoading);
    } else {
      useLoadingNavigate(text, navigate, setIsLoading);
    }
  };

  return (
    <Link
      fontSize={fontSize && `${fontSize}px`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => handleNavigate()}
    >
      {text}
    </Link>
  );
};

export default NavLink;
