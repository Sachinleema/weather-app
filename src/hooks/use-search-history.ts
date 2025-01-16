import { useLocalStorage } from "./use-local-storage";

interface SearchHistoryItem {
  id: string;
  query: string;
  lat: number;
  lon: number;
  name: string;
  country: string;
  state: string;
  searchedAt: number;
  
  

}


export function useSearchHistory {
const [history,SetHistory]=useLocalStorage<SearchHistoryItem[]>("search-history",[])
}