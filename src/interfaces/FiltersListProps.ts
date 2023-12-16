import Whiskey from './Whiskey'

interface FiltersListProps {
    whiskeys: Whiskey[];
    handleFilter: (id: string) => void;
  }

  export default FiltersListProps