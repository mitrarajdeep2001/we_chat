import Search from "./SVGs/Search";


function Searchbar() {
  return (
    <div className="dark:bg-foregroundSecondary-dark bg-foregroundSecondary-light w-[90%] mx-auto p-3 rounded-lg flex items-center space-x-2">
      <Search />
      <input
        className="bg-transparent outline-none text-textPrimary-light dark:text-textPrimary-dark placeholder-textSecondary-light dark:placeholder:text-textSecondary-dark"
        type="text"
        placeholder="Search your chat"
      />
    </div>
  );
}

export default Searchbar;
