import React from 'react';
import { NewDataProps, SetNewDataProps, SetInputProps } from './definitions'

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, 
    { newDatas, setNewDatas }: NewDataProps & SetNewDataProps, 
    {setInputVal}: SetInputProps, 
    id: number): void => {
    const { name, value } = e.target;
    const searchId = newDatas.find((data) => data.id === id);
    console.log("handlechange", searchId); // Object { id: 2, name: "Nathan" }
    const mappingChange = newDatas.map((data) => data.id === id 
        ? {...data, id: data.id, [name]: value} 
        : data);
    console.log(mappingChange, "map");
    setNewDatas(mappingChange);
    setInputVal(value);
}
export default handleChange;