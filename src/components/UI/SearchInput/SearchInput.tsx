type SearchInputProps = {
    query: string,
   onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchInput: React.FC<SearchInputProps> = props => {
    const {query, onChangeHandler} = props
    return <input onChange={onChangeHandler} value={query} className='d-flex w-100' placeholder='Szukaj..'/>
}

export default SearchInput