import { NewDataProps, SetNewDataProps } from './definitions'

const handleToggle = (id: number, { newDatas, setNewDatas }: NewDataProps & SetNewDataProps): void => {
    const searchById = newDatas.find((newData) => newData.id === id);
    console.log(searchById, "searchById toogle")
    const mappingBool = newDatas.map((data) => data.id === searchById?.id 
        ? {...searchById, 
            id: searchById?.id, 
            name: searchById?.name, 
            bool: !searchById?.bool
        } : data)
    console.log(mappingBool, "machin")
    setNewDatas(mappingBool);
}

export default handleToggle;