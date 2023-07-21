import { Item } from "../types/types.tsx"

export function Completed({ items, setItems, handleChangeCheckbox }) {
    const completedItems = items.filter((item: Item) => item.completed === true)

    const handleDelete = (currItem: Item) => {
        const filteredItems = items.filter((item: Item) => item.id !== currItem.id)  
        setItems(filteredItems)
    }

    return (
        <div>
            {completedItems.map((item: Item) => (
                <div className="flex" key={item.id}>
                    <li className={`${item.completed ? "line-through" : ""}`}>{item.name}</li>
                    <input type="checkbox" onChange={() => handleChangeCheckbox(item)} checked={item.completed}></input>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                </div>
            ))}
            <button onClick={() => setItems([])}>DELETE ALL</button>
        </div>
    )
}
