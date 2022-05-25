import React from 'react'

export default function DeptRow({ name, count, id }) {
    function handleDelete() {
        console.log(id)
    }

    return (
        <div className='m-4 relative '>
            {
                count ? (

                    <div className=" w-60 h-32 rounded bg-cyan-600 text-white mr-8 ">
                        <h1 className="font-bold p-6 text-xl ">{name}</h1>
                        <h1 className="font-bold text-right px-4 py-2">{count} items</h1>
                    </div>

                ) :
                    (<div className=" flex w-60 h-32 rounded bg-cyan-600 text-white justify-center items-center mr-8 ">
                        <h1 className="font-bold">{name}</h1>
                    </div>)
            }
            {
                id && <div className=" absolute top-0 right-0 mr-10 mt-1">
                    <button onClick={handleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            }

        </div>
    )
}
