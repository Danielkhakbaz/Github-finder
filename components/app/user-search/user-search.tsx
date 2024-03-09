"use client";

import { useRef } from "react";
import SearchButton from "components/app/user-search/components/search-button/search-button";
import ClearButton from "components/app/user-search/components/clear-button/clear-button";
import { searchAction } from "actions/search";

const UserSearch = () => {
  const searchRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex justify-center my-6 lg:my-7">
      <div className="w-3/5">
        <form ref={searchRef} action={searchAction}>
          <div className="form-control">
            <div className="relative">
              <input
                className="input input-sm input-bordered w-full text-black lg:input-md"
                name="searchValue"
                placeholder="Search..."
                type="text"
              />
              <SearchButton />
            </div>
          </div>
        </form>
      </div>
      <ClearButton searchRef={searchRef} />
    </div>
  );
};

export default UserSearch;
