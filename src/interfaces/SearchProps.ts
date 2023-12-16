interface SearchProps {
    searchQuery: string;
    handleSearch: () => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export default SearchProps