type SelectInputProps = {
    options: {
        name: string,
        value: string,
    }[],
    defaultValue: string,
    onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void,

}
const SelectInput: React.FC<SelectInputProps> = props => {
    const {options, defaultValue, onChangeHandler} = props
    return <select onChange={onChangeHandler} className='d-flex justify-content-between my-2' defaultValue={defaultValue}>
        {options.map(o => <option key={o.value} value={o.value}>{o.name}</option>)}
    </select>
}

export default SelectInput