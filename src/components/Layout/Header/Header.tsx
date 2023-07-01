import SelectInput from "../../UI/SelectInput/SelectInput";
import {useContext} from "react";
import {SearchContext} from "../../../App";

type HeaderProps = {}
const Header: React.FC<HeaderProps> = props => {
    const {setSortBy} = useContext(SearchContext)
    const onSelectChangeHandler = ((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value)
    })
    const sortOptions = [{name: 'Najtańsze', value: 'price-asc'}, {name: 'Najdroższe', value: 'price-desc'}]
    return <header className='d-flex justify-content-between text-light bg-dark py-3 w-100 mx-auto '>
        <div
            className='d-flex flex-column flex-lg-row justify-content-center align-items-center  justify-content-lg-between  w-75 mx-auto'>
            <h3 className='p-0 m-0'>Shopware Listing</h3>
            <SelectInput onChangeHandler={onSelectChangeHandler} options={sortOptions}
                         defaultValue='Najtańsze'/>
        </div>
    </header>
}

export default Header