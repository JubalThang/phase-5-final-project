import React from 'react'

export default function DeptRow({name}) {
    return (
        <div className=" flex w-60 h-32 rounded bg-cyan-600 text-white justify-center items-center mr-8 ">
            <h1 className="font-bold">{name}</h1>
        </div>
    )
}
