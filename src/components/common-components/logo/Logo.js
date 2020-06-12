import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../../assets/jobit.png';

const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoImage} height={32} alt="Job it" />
    </Link>
  );
};

export default Logo;
