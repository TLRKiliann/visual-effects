import { NewDataProps, SetNewDataProps, SetInputProps, SetRegisterProps } from './definitions'

const handleClick = (id: number,
    { newDatas, setNewDatas }: NewDataProps & SetNewDataProps,
    {setRegister}: SetRegisterProps, 
    inputVal: string, 
    {setInputVal}: SetInputProps): void => {
    console.log("clicked for id", id)
    const searchById = newDatas.find((newData) => newData.id === id);
    console.log("searchById", searchById) // Object { id: 2, name: "Nathan" }
    const mapName = newDatas.filter((newData) => newData.id !== searchById?.id 
        ? {...searchById, id: newData.id, name: inputVal} 
        : newData);
    setNewDatas(mapName);
    setRegister(mapName);
    setInputVal("");
}
export default handleClick;