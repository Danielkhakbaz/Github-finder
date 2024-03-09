import { RefObject } from "react";

type ClearButtonProps = {
  searchRef: RefObject<HTMLFormElement>;
};

const ClearButton = ({ searchRef }: ClearButtonProps) => {
  const handleClear = () => {
    searchRef.current?.reset();
  };

  return (
    <button
      className="btn btn-ghost btn-sm w-min ml-2 lg:btn-md"
      onClick={handleClear}
    >
      Clear
    </button>
  );
};

export default ClearButton;
