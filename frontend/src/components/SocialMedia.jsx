import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from "react-icons/gr";


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/md-aman-1282b4169" target="_blank" rel="noopener noreferrer">
        <GrLinkedinOption/>
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/md.aman.71868" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/fit_ambivert" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
