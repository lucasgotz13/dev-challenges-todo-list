import { Item } from "../types/types.tsx"

export function Completed({ items, handleChangeCheckbox }) {
    const completedItems = items.filter((item: Item) => item.completed === true)
    console.log(completedItems)

    return (
        <div>
            {completedItems.map((item: Item) => (
                <div className="flex" key={item.id}>
                    <li className={`${item.completed ? "line-through" : ""}`}>{item.name}</li>
                    <input type="checkbox" onChange={() => handleChangeCheckbox(item)}></input>
                    <button>Delete</button>
                </div>
            ))}
            <button>DELETE ALL</button>
        </div>
    )
}
