import { Item } from "../types/types.tsx"

export function Completed({ items, setItems, handleChangeCheckbox }) {
    const completedItems = items.filter((item: Item) => item.completed === true)

    const handleDelete = (currItem: Item) => {
        const filteredItems = items.filter((item: Item) => item.id !== currItem.id)  
        setItems(filteredItems)
    }

    return (
        <div className="flex flex-col items-end">
            {items.length !== 0 ? completedItems.map((item: Item) => (
                <div className="flex gap-5 mb-3" key={item.id}>
                    <input type="checkbox" className="w-5" onChange={() => handleChangeCheckbox(item)} checked={item.completed}></input>
                    <li className={`${item.completed ? "line-through" : ""} list-none text-[18px]`}>{item.name}</li>
                    <span className="material-symbols-outlined hover:cursor-pointer" onClick={() => handleDelete(item)}>delete</span>
                </div>
            )) : <h1>You don't have any completed tasks!</h1>}
            {items.length !== 0 && <button onClick={() => setItems([])} className="px-3 py-1 text-white bg-[#EB5757]">DELETE ALL</button>}
        </div>
    )
}
