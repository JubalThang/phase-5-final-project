import { useContext } from 'react'
import { ItemsContext } from './Context/AppContexts'

export default function ItemRow({ item, index }) {
  const { items, setItems } = useContext(ItemsContext)
  const RowItem = ({ text }) => {
    return (
      <h1>{text}</h1>
    )
  }

  function handleDeleteItem() {
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
      <RowItem text={`Department: ${item.department.name}`} />
      <button onClick={handleDeleteItem} className=" hover:text-red-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}

