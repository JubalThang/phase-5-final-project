import React from 'react'
import DeptRow from './DeptRow'
import ItemRow from './ItemRow'

export default function Dashboard({items}) {
    console.log("call")
    return (
        <div className=" p-8 ">
            <div>
                <h1 className="pt-4 mb-8 font-bold text-2xl ">Departments </h1>
                <div className="flex mb-8">
                    <DeptRow name="Audio and Visual" />
                    <DeptRow name="Productions" />
                </div>
            </div>
            <div>
                <h1 className="pt-4 mb-8 font-bold text-2xl ">All Items </h1>
                <div className="mb-8">
                    {
                        // items.map(item => {
                        //     <ItemRow />
                        // })
                    }
                </div>
            </div>

        </div>
    )
}
