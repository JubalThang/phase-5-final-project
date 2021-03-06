import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CurrentUser, ItemsContext } from './Context/AppContexts'
import ItemRow from './ItemRow'

export default function Items() {
  const { items } = useContext(ItemsContext)
  const { currentUser } = useContext(CurrentUser)

  if (!items) { return <div></div> }

  // console.log(items)
  return (
    <div className="p-8">
      <div className=' flex mb-8 justify-between '>

        <h1 className="font-bold text-2xl">ITEMS</h1>
        { currentUser.admin && <Link to='/create_new_item'><div className=" primary hover:bg-white hover:text-gray-800 ">New Item</div></Link>}
      </div>
      <div className='flex flex-wrap mt-8'>
        {
          items && items.map((item, index) => <ItemRow key={item.id} item={item} index={index} admin={currentUser.admin}/>)
        }
      </div>
    </div>
  )
}
