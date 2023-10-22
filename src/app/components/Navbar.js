import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo_black.png";
const Navbar = ({ localeEN }) => {
  return (
    <div id='navbar'>
      <Link href={`${localeEN ? "/en" : "/"}`} className='inline-block'>
        <Image src={logo} alt='logo' width={150} />
      </Link>
    </div>
  );
};

export default Navbar;
