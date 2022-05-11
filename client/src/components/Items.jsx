import React, { useContext } from 'react'
import { ItemsContext } from './Context/AppContexts'
import ItemRow from './ItemRow'

export default function Items() {
  const {items} = useContext(ItemsContext)

  if (!items) {return <div></div>}

  
  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl">ITEMS</h1>
      <div className='flex flex-wrap mt-8'>
        {
          items && items.map((item, index) => <ItemRow key={item.id} item={item} index={index} />)
        }
      </div>
    </div>
  )
}
