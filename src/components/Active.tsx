import { Item } from "../types/types.tsx"

export function Active({ items, setInput, handleAdd, handleChangeCheckbox }) {
    
    const filteredItems = items.filter((item: Item) => item.completed === false)

    return (
        <>
            <form>
                <input type="text" className="border-2" onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit" onClick={handleAdd}>Add</button>
            </form>
            {filteredItems.map((item: Item) => (
                <div className="flex" key={item.name}>
                    <li className={`${item.completed ? "line-through" : ""}`}>{item.name}</li>
                    <input type="checkbox" onChange={() => handleChangeCheckbox(item)}></input>
                </div>
            ))}
        </>
    )
}
