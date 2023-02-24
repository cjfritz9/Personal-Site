import React, { useContext } from 'react';
import { Link } from '@chakra-ui/react';
import { NavLinkProps } from '../models/Props';
import { SiteContext } from '../context/SiteContext';
import useLoadingNavigate from '../hooks/UseLoadingNavigate';
import { useNavigate } from 'react-router';

const NavLink: React.FC<NavLinkProps> = ({
  text,
  fontSize,
  altLink,
  isExternal = false
}) => {
  const { setIsHovering, setIsLoading } = useContext<any>(SiteContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (altLink) {
      if (isExternal) {
        window.open(altLink, '_blank');
      } else {
        useLoadingNavigate(altLink, navigate, setIsLoading);
      }
    } else {
      if (isExternal) {
        window.open(text, '_blank');
      } else {
        useLoadingNavigate(text, navigate, setIsLoading);
      }
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
