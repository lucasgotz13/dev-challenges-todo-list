import { Item } from "../types/types.tsx"

export function Active({ items, setInput, handleAdd, handleChangeCheckbox }) {

    const filteredItems = items.filter((item: Item) => item.completed === false)

    return (
        <>
            <form className="flex gap-8 items-center">
                <input type="text" className="border-2 py-2 w-[330px] rounded-md" onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit" className="py-3 px-8 rounded-xl bg-[#2F80ED] text-white" onClick={handleAdd}>Add</button>
            </form>
            <div className="flex flex-col flex-start">
                {filteredItems.map((item: Item) => (
                    <div className="flex gap-5 mb-3" key={item.name}>
                        <input type="checkbox" className="w-5" onChange={() => handleChangeCheckbox(item)}></input>
                        <li className={`${item.completed ? "line-through" : ""} list-none text-[18px]`}>{item.name}</li>
                    </div>
                ))}
            </div>
        </>
    )
}
