import React, { useState, useEffect } from 'react'

type DetailsProps = {
    id: number;
    name: string;
    bool: boolean;
};

type DataProps = {
    datas: DetailsProps[];
    id: number;
    name: string;
    bool: boolean;
};

export default function BoxOne({datas}: DataProps) {

    const [newDatas, setNewDatas] = useState<DetailsProps[]>([])
    const [register, setRegister] = useState<string>("");
    const [inputVal, setInputVal] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id:number): void => {
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

    const handleClick = (id: number): void => {
        console.log("clicked for id", id)
        const searchById = newDatas.find((newData) => newData.id === id);
        console.log("searchById", searchById) // Object { id: 2, name: "Nathan" }
        const mapName = newDatas.filter((newData) => newData.id !== searchById?.id 
            ? {...searchById, id: newData.id, name: inputVal} 
            : newData);
        setNewDatas(mapName);
        setRegister(inputVal);
        setInputVal("");
    }

    useEffect(() => {
        const mapping = datas.map((data) => data)
        setNewDatas(mapping);
    }, [])

    const handleToggle = (id: number): void => {
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

    return (
        <div className='boxone--inside'>

        {newDatas.map((data) => (

            <div key={data.id}>

                <div className='boxone--title'>
                    <h4 className='title--h4'>Member ID: {data.id}</h4>
                </div>
                    
                <div className='box--name--data'>
                    <p>Name: {data.name}</p>
                </div>
                
                {data.bool === true ? (
                    <>
                        <div className='box--name--tochange'>
                            
                            <label htmlFor="name" className='label--name'>
                                Change name:
                            </label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={inputVal}
                                onChange={(e) => handleChange(e, data?.id)}
                                className="input--name"
                            />

                        </div>

                        <div className="box--name--btn">
                            <button type="button" onClick={() => handleClick(data?.id)}>Save</button>
                        </div>
                    </>
                    ) : null
                }

                <div className="box--name--showhide">
                    <button
                        type="button" onClick={() => handleToggle(data?.id)}
                    >{data.bool === false ? "Change" : "Hide"}</button>
                </div>
                
                <p style={{color: "orangered"}}>Name registered: {register}</p>

            </div>

        ))}

        </div>
    )
}