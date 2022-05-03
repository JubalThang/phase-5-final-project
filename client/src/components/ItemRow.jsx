import React from 'react'

export default function ItemRow() {
    const RowItem = ({text}) => {
        return(
            <h1>{text}</h1>
        )
    }
  return (
    <div className="flex w-full mb-4 bg-slate-300 py-3 px-4 justify-between rounded">
        <RowItem text="1" />
        <RowItem text="Model_no" />
        <RowItem text="Department" />
        <RowItem text="Del" />
    </div>
  )
}

