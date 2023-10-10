import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo_black.png";
const Navbar = () => {
  return (
    <div id='navbar'>
      <Link href='/'>
        <Image src={logo} alt='logo' width={170} />
      </Link>
    </div>
  );
};

export default Navbar;
