import { NewDataProps, SetNewDataProps, SetInputProps, SetRegisterProps } from './definitions'

const handleClick = (id: number,
    { newDatas, setNewDatas }: NewDataProps & SetNewDataProps,
    {setRegister}: SetRegisterProps, 
    inputVal: string, 
    {setInputVal}: SetInputProps): void => {
    const searchById = newDatas.find((newData) => newData.id === id);
    const mapName = newDatas.filter((newData) => newData.id !== searchById?.id 
        ? {...searchById, id: searchById?.id, name: inputVal} 
        : newData);
    setNewDatas(mapName);
    setRegister(mapName);
    setInputVal("");
}
export default handleClick;