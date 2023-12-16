import Whiskey from './Whiskey'

interface WhiskeyListState {
    currentPage: number;
    whiskeys: Whiskey[];
    originalWhiskeys: Whiskey[],
    isFilterApplied: boolean,
    searchQuery:string,
    loading:boolean
  }

  export default WhiskeyListState