import Dropdown from 'react-bootstrap/Dropdown';

type SelectInputProps = {
    options: {
        name: string,
        value: string,
    }[],
    onChangeHandler: (sort: string) => void,

}
const SelectInput: React.FC<SelectInputProps> = props => {
    const {options, onChangeHandler} = props
    return <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Sort by
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {options.map(o => <Dropdown.Item onClick={onChangeHandler.bind(null, o.value)} key={o.value}
                                             value={o.value}>{o.name}</Dropdown.Item>)}


        </Dropdown.Menu>
    </Dropdown>
}

export default SelectInput