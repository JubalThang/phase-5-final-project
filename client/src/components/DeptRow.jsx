import React from 'react'

export default function DeptRow({ name, count }) {

    return (
        <>
            {
                count ? (
                    <div className=" w-60 h-32 rounded bg-cyan-600 text-white mr-8 ">
                        <h1 className="font-bold p-6 text-xl ">{name}</h1>
                        <h1 className="font-bold text-right px-4 py-2">{count} items</h1>
                    </div>) : 
                    (<div className=" flex w-60 h-32 rounded bg-cyan-600 text-white justify-center items-center mr-8 ">
                        <h1 className="font-bold">{name}</h1>
                    </div>)
            }
        </>
    )
}
