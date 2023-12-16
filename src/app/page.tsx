'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import FiltersList from '@/components/FiltersList'
import Whiskey from '../interfaces/Whiskey'
import WhiskeyListState from '@/interfaces/WhiskeyListState'
import Search from '@/components/Search'
import { Skeleton } from "@/components/ui/skeleton"
import SkeletonCard from '@/components/SkeletonCard'

class WhiskeyList extends React.Component<{}, WhiskeyListState>{
  itemsPerPage = 21;
  constructor(props: WhiskeyListState) {
    super(props);
    this.state = {
      currentPage: 1,
      whiskeys: [],
      originalWhiskeys: [],
      isFilterApplied: false,
      searchQuery: '',
      loading:true
    };
  }

  async getServerData(): Promise<{ whiskeys: Whiskey[] }> {
    try {
      // Simulating fetching whiskey data from an API or database
      const response = await fetch('http://localhost:4000/whiskeys');
      const whiskeys = await response.json();
      // setTimeout to fake loading with the loading variable
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return { whiskeys };
    } catch (error) {
      console.error('Error fetching whiskeys:', error);
      return { whiskeys: [] };
    }
  }

  async componentDidMount() {
    try {
      const { whiskeys } = await this.getServerData();
      this.setState({ whiskeys, originalWhiskeys: whiskeys, loading: false });
    } catch (error) {
      console.error('Error fetching whiskeys:', error);
      this.setState({ whiskeys: [], loading: false });
    }
  }

  componentDidUpdate(prevProps: Whiskey, prevState: WhiskeyListState) {
    // Check if searchQuery has changed
    if (prevState.searchQuery !== this.state.searchQuery) {
      // Trigger the search logic
      this.handleSearch();
    }
  }

  get indexOfLastItem() {
    return this.state.currentPage * this.itemsPerPage;
  }

  get indexOfFirstItem() {
    return this.indexOfLastItem - this.itemsPerPage;
  }

  get currentWhiskeys() {
    return this.state.whiskeys.slice(this.indexOfFirstItem, this.indexOfLastItem);
  }

  get totalPages() {
    const { whiskeys } = this.state;
    const totalItems = whiskeys.length;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    return totalPages;
  }

  handlePageChange = (newPage: number) => {
    this.setState({ currentPage: newPage });
  };

  handleFilter = (id: string) => {
    const { isFilterApplied, originalWhiskeys } = this.state;
  
    // Toggle the filter state
    const newFilterState = !isFilterApplied;
  
    // Apply or remove the filter based on the state
    const filteredWhiskeys = newFilterState
      ? originalWhiskeys.filter((whiskey) => {
          const lowerCaseCountry = whiskey.Country.toLowerCase();
          return lowerCaseCountry === id.toLowerCase();
        })
      : originalWhiskeys;
  
    // Update the state with the filtered whiskeys and the filter state
    this.setState({ whiskeys: filteredWhiskeys, isFilterApplied: newFilterState });
  };

  handleSearch = () => {
    const { searchQuery, whiskeys, originalWhiskeys } = this.state;
  
    // Filter your data based on the search query
    const filteredWhiskeys = originalWhiskeys.filter(
      (whiskey) =>
        whiskey.Whiskey.toLowerCase().includes(searchQuery.toLowerCase()) ||
        whiskey.Class.toLowerCase().includes(searchQuery.toLowerCase()) ||
        whiskey.Country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        whiskey.Type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Update the state with the filtered data or return to the original state
    this.setState({ whiskeys: searchQuery ? filteredWhiskeys : originalWhiskeys });
  };

  handleChange = (event:any) => {
    const { value } = event.target;
    this.setState({ searchQuery: value });
  };

  render() {
    const { currentPage } = this.state;
    const totalPages = this.totalPages;

    // Specify the number of buttons to show on each side of the current page
    const buttonsToShow = 3;
    
    // Calculate the range of buttons to display
    const startRange = Math.max(1, currentPage - buttonsToShow);
    const endRange = Math.min(totalPages, currentPage + buttonsToShow);
    const noResults = this.state.searchQuery && this.state.whiskeys.length === 0
    return (
    <div>
      {this.state.loading ? (
        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 gap-4 sm:grid-cols-1 gap-2">
          {Array.from({ length: 21 }).map((_, i) => (
              <SkeletonCard key={i} />
          ))}
        </div>
        ) :(
        <>
          <Search searchQuery={this.state.searchQuery} handleChange={this.handleChange} handleSearch={this.handleSearch} />
          <FiltersList whiskeys={this.state.whiskeys} handleFilter={this.handleFilter} />
          {noResults ? (
            <p>Your search returned 0 results</p>
          ) : (
            <>
              <main className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 gap-4 sm: grid-cols-1 gap-2">
                {this.currentWhiskeys.map((whiskey: Whiskey)=> (
                  <Card key = {whiskey.Id} className="relative shadow-lg flex flex-col">
                    <Badge variant="destructive" className="absolute top-0 right-0 m-1">
                        {whiskey.CriticsScore}
                    </Badge>
                    <CardHeader>
                      <CardTitle className="mt-5 font-medium text-lg">{whiskey.Whiskey}</CardTitle>
                      <CardDescription>{whiskey.Class}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p>Price: {whiskey.Cost}</p>
                      <p>Country: {whiskey.Country}</p>
                      <p>Type: {whiskey.Type}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full hover:bg-zinc-950 hover:text-white">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </main>
              <div className="flex justify-center mt-4">
              {Array.from({ length: endRange - startRange + 1 }).map((_, index) => {
                  const pageNumber = startRange + index;
                  return (
                    <Button
                      key={pageNumber}
                      onClick={() => this.handlePageChange(pageNumber)}
                      className={`mx-1 px-3 py-1 ${
                        currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200'
                      }`}
                    >
                      {pageNumber}
                    </Button>
                  );
                })}
              </div> 
            </>
          )}
        </>
      )}
    </div>
    );
  }
}
export default WhiskeyList;