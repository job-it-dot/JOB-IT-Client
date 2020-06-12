import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../../../assets/jobit.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoImage} height={25} alt="Job it" />
    </Link>
  );
};

export default Logo;
