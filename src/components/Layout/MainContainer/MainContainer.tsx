import ProductList from "../../Products/ProductList/ProductList";
import SearchInput from "../../UI/SearchInput/SearchInput";
import {useContext} from "react";
import {SearchContext} from "../../../App";

type MainContainerProps = {}
const MainContainer: React.FC<MainContainerProps> = props => {
    const {searchQuery, setSearchQuery, sortBy, setSortBy} = useContext(SearchContext)
    const onSearchChangeHandler = ((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    })
    return <div className='w-75 mx-auto my-5 '>
        <div className='py-lg-3 d-flex justify-content-center w-50 mx-auto'>
            <SearchInput query={searchQuery} onChangeHandler={onSearchChangeHandler}/>
        </div>
        <div className='my-5'>
            <ProductList/>
        </div>

    </div>
}

export default MainContainer