import { Checkbox } from "@/components/ui/checkbox"
import FiltersListProps from "@/interfaces/FiltersListProps";


const FiltersList:React.FC<FiltersListProps> = ({whiskeys, handleFilter}) => {
    const uniqueCountries = Array.from(new Set(whiskeys.map(whiskey => whiskey.Country)));
    return (
        <nav className='hidden lg:flex flex-col h-96 w-60 m-0 lg:float-left'>
            <div className="space-y-2 my-5">
            {uniqueCountries.map(country => (
                <div key={country} className="flex-row justify-start items-center">
                    <Checkbox id={country} onClick={(event) => handleFilter((event.currentTarget as HTMLInputElement).id)} />
                    <label
                        htmlFor={country}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                        {country}
                    </label>
                </div>
            ))}
            </div>
        </nav>
    )
}

export default FiltersList