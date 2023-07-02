import Form from 'react-bootstrap/Form';

type SearchInputProps = {
    query: string,
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchInput: React.FC<SearchInputProps> = props => {
    const {query, onChangeHandler} = props
    return <Form.Control onChange={onChangeHandler} value={query} className='d-flex w-100' type="text"
                         placeholder="Szukaj.. "/>
}

export default SearchInput