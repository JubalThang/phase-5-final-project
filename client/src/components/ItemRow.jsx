import { useContext } from 'react'
import { ItemsContext } from './Context/AppContexts'

export default function ItemRow({item, index}) {
  const {items, setItems} = useContext(ItemsContext)
    const RowItem = ({text}) => {
        return(
            <h1>{text}</h1>
        )
    }

    function handleDeleteItem(){
      fetch(`/api/items/${item.id}`, {
        method: 'DELETE'
      })
      .then(res => {
        if (res.ok) {
          setItems(items.filter(d => d.id !== item.id))
        }
        else {
          res.json().then(error => alert(error.message))
        }
      })
    }
  return (
    <div className="flex w-full mb-4 bg-slate-300 py-3 px-4 justify-between rounded">
        <RowItem text={index + 1} />
        <RowItem text={`Model: ${item.model_no}`} />
        <RowItem text={`Department: ${item.department.name}`}/>
        <button onClick={handleDeleteItem} className=" hover:text-red-700">Del</button>
    </div>
  )
}

