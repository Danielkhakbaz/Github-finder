import type { Metadata } from "next";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";

export const metadata: Metadata = {
  title: "404 | Github Finder",
};

const NotFound = async () => {
  return (
    <div className="hero">
      <div className="hero-content flex flex-col text-center">
        <strong className="text-5xl lg:text-8xl">Oops!</strong>
        <p className="text-3xl my-10 lg:text-4xl">404 - Page not found!</p>
        <Link href="/">
          <button className="btn btn-primary btn-sm xl:btn-lg">
            <MdOutlineHome className="text-2xl mr-1" />
            <span>Back to home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
