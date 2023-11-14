import React, { useState, useEffect } from 'react'
import handleChange from '../lib/handleChange'
import handleToggle from '../lib/handleToggle'
import handleClick from '../lib/handleClick'
import { DataProps, DetailsProps } from '../lib/definitions'
import datas from '../lib/datas'

export default function BoxOne() {

    const [newDatas, setNewDatas] = useState<DetailsProps[] >([])
    const [register, setRegister] = useState<DetailsProps[]>([]);
    const [inputVal, setInputVal] = useState<string>("");

    useEffect(() => {
        //const mapping = datas.map((data) => data) bullshit
        setNewDatas(datas);
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

            <div key={data.id} className='boxone--box'>
                    
                <div className='box--name--data'>
                    <p>Member: {data.name}</p>
                </div>
                
                {(data.bool === true) && (register.length === 0) ? (
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
                    >{data.bool === true && (register.length === 0) ? "Hide" : "Change"}</button>
                </div>
                
                {register.map((reg) => reg.id === data.id ? (
                    <p className="register--p">Name registered: {reg.name}</p>
                    ) : null)
                }

            </div>

        ))}

        </div>
    )
}
