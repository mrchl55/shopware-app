import React, {Dispatch, SetStateAction, useState} from 'react';
import {createContext} from 'react';
import MainContainer from "./components/Layout/MainContainer/MainContainer";
import Header from "./components/Layout/Header/Header";

type SearchContext = {
    searchQuery: string,
    setSearchQuery: Dispatch<SetStateAction<string>>,
    sortBy: string,
    setSortBy: Dispatch<SetStateAction<string>>,
}

export const SearchContext = createContext<SearchContext>({
    searchQuery: '',
    setSearchQuery: () => {
    },
    sortBy: '',
    setSortBy: () => {
    },

})

function App() {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [sortBy, setSortBy] = useState<string>('price-asc')
    return (
        <SearchContext.Provider value={
            {
                searchQuery,
                setSearchQuery,
                sortBy,
                setSortBy

            }
        }>
            <div className="App w-100 mx-auto">
                <Header/>
                <MainContainer/>
            </div>
        </SearchContext.Provider>
    );
}

export default App;
