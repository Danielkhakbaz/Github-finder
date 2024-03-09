import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineHome, MdInfoOutline } from "react-icons/md";

const Navbar = async () => {
  return (
    <nav className="navbar w-full bg-gray-900 text-white flex justify-between items-center shadow-lg px-4">
      <Link className="link link-hover" href="/">
        <FaGithub className="text-xl inline lg:text-3xl" />
        <span className="font-bold hidden ml-2 lg:inline">Github Finder</span>
      </Link>
      <div className="flex justify-end">
        <Link
          className="btn btn-ghost btn-sm transition-all rounded-btn hover:opacity-75"
          href="/"
        >
          <MdOutlineHome className="text-base inline lg:text-xl" />
          <span className="text-xs ml-0.5 xl:text-base xl:ml-1">Home</span>
        </Link>
        <Link
          className="btn btn-ghost btn-sm transition-all rounded-btn hover:opacity-75"
          href="/about"
        >
          <MdInfoOutline className="text-base inline lg:text-xl" />
          <span className="text-xs ml-0.5 xl:text-base xl:ml-1">About</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
