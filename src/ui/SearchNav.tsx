import { CiSearch } from "react-icons/ci";

const SearchNav = () => {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Search for products"
        className="w-full pr-10 py-2 border rounded input-bg"
      />
      <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black font-bold" />
    </div>
  );
};

export default SearchNav;
