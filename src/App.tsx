import { useState } from "react"
import { Item, PageType } from "./types/types.tsx"
import { Active } from "./components/Active.tsx"
import { Completed } from "./components/Completed.tsx"
import { All } from "./components/All.tsx"

function App() {
    const [input, setInput] = useState<string>("")
    const [page, setPage] = useState<PageType>("all")
    const [items, setItems] = useState<Item[]>([
        {
            id: 1,
            name: "Coding challenges 1",
            completed: false
        },
        {
            id: 2,
            name: "Coding challenges 2",
            completed: true
        }
    ])

    const handleAdd = (e: any) => {
        e.preventDefault()
        // @ts-ignore
        setItems(prev => {
            if (prev.length == 0) {
                return setItems([{
                    id: 1,
                    name: input,
                    completed: false
                }])
            } else {
                let index = items.slice(-1)[0].id ?? 0
                return setItems([...prev, {
                    id: index + 1,
                    name: input,
                    completed: false
                }])
            }
        })
    }

    const handleChangeCheckbox = (currItem: Item) => {
        const updatedItem = items.map(prevItem => {
            if (prevItem.id === currItem.id) {
                return { ...prevItem, completed: !prevItem.completed }
            }

            return prevItem
        })
        setItems(updatedItem)
    }

    return (
        <div className="font-Raleway flex flex-col justify-center items-center gap-5 p-12">
            <h1 className="text-3xl text-center font-bold">#todo</h1>
            <div className="flex gap-20">
                <button onClick={() => setPage("all")} className={`p-3 ${page === "all" ? "border-b-4 border-b-blue-500" : "border-b-2 border-b-gray-500"}`}>All</button>
                <button onClick={() => setPage("active")} className={`p-3 border-2 border-white ${page === "active" ? "border-4 border-b-blue-500" : "border-b-2 border-b-gray-500"}`}>Active</button>
                <button onClick={() => setPage("completed")} className={`p-3 ${page === "completed" ? "border-4 border-b-blue-500" : "border-b-2 border-b-gray-500"}`}>Completed</button>
            </div>
            <div className="flex flex-col items-start gap-5">
                {page === "active" ? <Active items={items} handleChangeCheckbox={handleChangeCheckbox} handleAdd={handleAdd} setInput={setInput} /> : page === "completed" ? <Completed items={items} handleChangeCheckbox={handleChangeCheckbox} setItems={setItems} /> : <All items={items} handleChangeCheckbox={handleChangeCheckbox} handleAdd={handleAdd} setInput={setInput} />}
            </div>
        </div>
    )
}

export default App
