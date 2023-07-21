import { Item } from "../types/types.tsx"

export function All({ items, setInput, handleAdd, handleChangeCheckbox }) {
    return (
        <div>
            <form>
                <input type="text" className="border-2" onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit" onClick={handleAdd}>Add</button>
            </form>
            <div>
                {items.map((item: Item) => (
                    <div className="flex" key={item.id}>
                        <li className={`${item.completed ? "line-through" : ""}`}>{item.name}</li>
                        <input type="checkbox" onChange={() => handleChangeCheckbox(item)} checked={item.completed}></input>
                    </div>
                ))}
            </div>
        </div>
    )
}
