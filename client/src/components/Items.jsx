import React from 'react'
import ItemRow from './ItemRow'

export default function Items({items}) {
    console.log(items)
    console.log("here")
  return (
      <div className="p-8">
          <div className="text-2xl font-bold mb-8">
              Items
          </div>
          {
              items.map(item => {
                <ItemRow />
              })
          }
        
      </div>
  )
}
