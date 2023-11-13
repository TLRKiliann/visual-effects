import React, { useState, useEffect } from 'react'

type DetailsProps = {
    id: number;
    name: string;
};

type DataProps = {
    datas: DetailsProps[];
    id: number;
    name: string;
};

export default function BoxOne({datas}: DataProps) {

    const [newDatas, setNewDatas] = useState<DetailsProps[]>([])
    const [register, setRegister] = useState<DetailsProps>();
    const [inputVal, setInputVal] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id:number): void => {
        const {name, value} = e.target;
        const searchId = newDatas.find((data) => data.id === id);
        console.log("handlechange", searchId); // Object { id: 2, name: "Nathan" }
        setRegister(searchId)
        setInputVal(value);
    }

    const handleClick = (id: number): void => {
        console.log("clicked", id)
        const searchById = newDatas.find((newData) => newData.id === id);
        console.log(searchById) // Object { id: 2, name: "Nathan" }
        const mapName = newDatas.filter((newData) => newData.id === searchById?.id 
        ? {...newDatas, id: searchById.id, name: inputVal} : newData);
        setNewDatas(mapName)
    }

    useEffect(() => {
        const mapping = datas.map((data) => data)
        setNewDatas(mapping);
    }, [])

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
                
                <div className='box--name--tochange'>
                    
                    <label htmlFor="name" className='label--name'>
                        Change name:
                    </label>

                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={inputVal}
                        onChange={(e) => handleChange(e, data.id)}
                        className="input--name"
                    />

                </div>

                <div className="box--name--btn">
                    <button type="button" onClick={() => handleClick(data.id)}>Save</button>
                </div>

                <div className="box--name--showhide">
                    <button>Change / Hide</button>
                </div>

            </div>

        ))}

        </div>
    )
}
