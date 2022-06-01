import React, { useContext } from 'react'
import { DeparmentsContext, ItemsContext } from './Context/AppContexts'
import DeptRow from './DeptRow'
import ItemRow from './ItemRow'

export default function Dashboard() {
    const {departments}  = useContext(DeparmentsContext)
    const {items}  = useContext(ItemsContext)
   
    return (
        <div className=" p-8 ">
            <div>
                <h1 className="pt-4 mb-8 font-bold text-2xl ">Departments  </h1>
                <div className="flex mb-8 flex-wrap">
                    {
                        departments && ( departments.map(department =>  <DeptRow key={department.name} dept={department} count={department.items.length}/>)   ) 
                    }
                </div>
            </div>
            <div>
                <h1 className="pt-4 mb-8 font-bold text-2xl ">All Items  </h1>
                <div className="mb-8">
                    {
                        items && items.map((item, index) => <ItemRow key={item.id} item={item} index={index} />)
                    }
                </div>
            </div>

        </div>
    )
}
