import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-welcomeMainBg  text-white w-screen pt-5 ">
      <div className="container  w-[90vw] rounded-xl backdrop-blur-md bg-neutral-500/30 border border-neutral-400  p-2 mx-auto overflow-y-auto flex gap-3">
        <Link to={"/profile"}>Профиль</Link>
        <Link to={"/repo"}>Репозиторий</Link>
        {/* <Link></Link> */}
      </div>
    </div>
  );
};

export default Navbar;
