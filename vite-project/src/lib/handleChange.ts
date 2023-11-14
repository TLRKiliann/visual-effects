import React from 'react';
import { NewDataProps, SetNewDataProps, SetInputProps } from './definitions'

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, 
    { newDatas, setNewDatas }: NewDataProps & SetNewDataProps, 
    {setInputVal}: SetInputProps, 
    id: number): void => {
    const { name, value } = e.target;
    const searchId = newDatas.find((data) => data.id === id);
    const mappingChange = newDatas.map((data) => data.id === searchId?.id 
        ? {...data, id: data.id, [name]: value} 
        : data);
    setNewDatas(mappingChange);
    setInputVal(value);
}
export default handleChange;