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
  isExternal = false,
  isNonLink = false
}) => {
  const { setIsHovering, setIsLoading } = useContext<any>(SiteContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (altLink) {
      useLoadingNavigate(altLink, navigate, setIsLoading);
    } else {
      useLoadingNavigate(text, navigate, setIsLoading);
    }
  };

  if (isExternal) {
    return (
      <Link
        isExternal={isExternal}
        href={altLink ? altLink : text}
        fontSize={fontSize && `${fontSize}px`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <Link
        fontSize={fontSize && `${fontSize}px`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={isNonLink ? undefined : () => handleNavigate()}
      >
        {text}
      </Link>
    );
  }
};

export default NavLink;
