"use client";

import { useFormStatus } from "react-dom";
import dynamic from "next/dynamic";

const Spinner = dynamic(() => import("utils/spinner/spinner"), {
  ssr: false,
});

const SearchButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-sm absolute rounded-l-none top-0 right-0 lg:w-36 lg:btn-md">
      {!pending ? "Go" : <Spinner />}
    </button>
  );
};

export default SearchButton;
