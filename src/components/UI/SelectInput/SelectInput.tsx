import Dropdown from 'react-bootstrap/Dropdown';

type SelectInputProps = {
    options: {
        name: string,
        value: string,
    }[],
    currentValue: string,
    onChangeHandler: (sort: string) => void,

}
const SelectInput: React.FC<SelectInputProps> = props => {
    const {options, onChangeHandler, currentValue} = props
    const currentOptionName = options.find(o => o.value === currentValue)?.name
    return <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {currentOptionName}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {options.map(o => {
                return <Dropdown.Item disabled={currentValue === o.value} onClick={onChangeHandler.bind(null, o.value)}
                                      key={o.value}
                                      value={o.value}>{o.name}</Dropdown.Item>
            })}

        </Dropdown.Menu>
    </Dropdown>
}

export default SelectInput