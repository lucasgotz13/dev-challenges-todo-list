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
        <div className="font-Raleway p-20">
            <h1 className="text-3xl text-center">To-do list</h1>
            <div className="flex justify-center items-center">
                <button onClick={() => setPage("all")} className={`p-5 border-2 border-white ${page === "all" ? "border-b-blue-500" : "border-b-white"}`}>All</button>
                <button onClick={() => setPage("active")} className={`p-5 border-2 border-white ${page === "active" ? "border-b-blue-500" : "border-b-white"}`}>Active</button>
                <button onClick={() => setPage("completed")} className={`p-5 border-2 border-white ${page === "completed" ? "border-b-blue-500" : "border-b-white"}`}>Completed</button>
            </div>
            <div>
                {page === "active" ? <Active items={items} handleChangeCheckbox={handleChangeCheckbox} handleAdd={handleAdd} setInput={setInput} /> : page === "completed" ? <Completed items={items} handleChangeCheckbox={handleChangeCheckbox} setItems={setItems} /> : <All items={items} handleChangeCheckbox={handleChangeCheckbox} handleAdd={handleAdd} setInput={setInput} />}
            </div>
        </div>
    )
}

export default App
