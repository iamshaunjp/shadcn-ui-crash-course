import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SearchProps from "@/interfaces/SearchProps"


const Search: React.FC<SearchProps> = ({searchQuery, handleSearch, handleChange}) => {
  return (
    <div className='flex justify-center my-5'>
        <Input
            className="w-1/2 mr-2"
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
            />
        <Button variant="secondary" className="hover:bg-slate-400 hover:text-white" onClick={handleSearch}>
            Search
        </Button>
    </div>
  )
}

export default Search