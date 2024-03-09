import type { Metadata } from "next";
import Link from "next/link";
import { socialMedias } from "constants/about/socials";

export const metadata: Metadata = {
  title: "About | Github Finder",
};

const About = async () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <strong className="text-4xl tracking-wide lg:text-6xl">
        Github Finder
      </strong>
      <p className="w-full text-base text-justify p-5 sm:w-1/2 lg:text-lg">
        A React.js app to search for Github profiles and being able to see the
        profile deatils. This is one of my projects which you can also give a
        star to this{" "}
        <Link
          className="link link-neutral"
          href="https://github.com/Danielkhakbaz/Github-Finder-React-TS"
          target="_blank"
          rel="noreferrer"
        >
          Project on Github
        </Link>{" "}
        if you want to :)
      </p>
      <div className="flex mt-2">
        {socialMedias.map((social) => (
          <Link
            className="link-neutral text-2xl transition-all mx-2 hover:opacity-75 lg:text-3xl"
            href={social.href}
            key={social.href}
            target="_blank"
            rel="noreferrer"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default About;
