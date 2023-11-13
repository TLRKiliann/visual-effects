import React, { useState, useEffect } from 'react'
import handleChange from '../lib/handleChange'
import handleToggle from '../lib/handleToggle'
import handleClick from '../lib/handleClick'
import { DataProps, DetailsProps } from '../lib/definitions'

export default function BoxOne({datas}: DataProps) {

    const [newDatas, setNewDatas] = useState<DetailsProps[]>([])
    const [register, setRegister] = useState<DetailsProps[]>([]);
    const [inputVal, setInputVal] = useState<string>("");

    useEffect(() => {
        const mapping = datas.map((data) => data)
        setNewDatas(mapping);
    }, [])

    const callHandleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        handleChange(e, { newDatas, setNewDatas }, { setInputVal }, id);
    };

    const callHandleClick = (id: number) => {
        handleClick(id, { newDatas, setNewDatas }, { setRegister }, inputVal, { setInputVal });
    }
    
    const callHandleToggle = (id: number) => {
        handleToggle(id, { newDatas, setNewDatas });
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
                                onChange={(e) => callHandleChange(e, data?.id)}
                                className="input--name"
                            />

                        </div>

                        <div className="box--name--btn">
                            <button type="button" onClick={() => callHandleClick(data?.id)}>Save</button>
                        </div>
                    </>
                    ) : null
                }

                <div className="box--name--showhide">
                    <button
                        type="button" onClick={() => callHandleToggle(data?.id)}
                    >{data.bool === false ? "Change" : "Hide"}</button>
                </div>
                
                {register.map((reg) => reg.id === data.id ? (
                <p className="register--p">Name registered: {reg.name}</p>
                ): null)}

            </div>

        ))}

        </div>
    )
}
