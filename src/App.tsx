import { useState } from "react"
import { Item, PageType } from "./types/types.tsx"
import { Active } from "./components/Active.tsx"
import { Completed } from "./components/Completed.tsx"
import { All } from "./components/All.tsx"

function App() {
    const [input, setInput] = useState<string>("")
    const [page, setPage] = useState<PageType>("completed")
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
        // items.slice(-1)[0].id
        setItems(prev => [...prev, {
            id: items.slice(-1)[0].id + 1,
            name: input,
            completed: false
        }])
        e.preventDefault()
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
    //@ts-ignore

    return (
        <div classname="font-Raleway">
            <h1 className="text-3xl text-center">To-do list</h1>
            <div>
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
            {/* <form> */}
            {/*     <input type="text" className="border-2" onChange={(e) => setInput(e.target.value)}></input> */}
            {/*     <button type="submit" onClick={handleAdd}>Add</button> */}
            {/* </form> */}
            {/* <div> */}
            {/*     {items.map((item) => ( */}
            {/*         <div className="flex" key={item.id}> */}
            {/*             <li className={`${item.completed ? "line-through" : ""}`}>{item.name}</li> */}
            {/*             <input type="checkbox" onChange={() => handleChangeCheckbox(item)}></input> */}
            {/*         </div> */}
            {/*     ))} */}
            {/* </div> */}
            {page === "active" ? <Active items={items} handleChangeCheckbox={handleChangeCheckbox} handleAdd={handleAdd} setInput={setInput} /> : page === "completed" ? <Completed items={items} handleChangeCheckbox={handleChangeCheckbox} /> : <All items={items} handleChangeCheckbox={handleChangeCheckbox} handleAdd={handleAdd} setInput={setInput} />}
        </div>
    )
}

export default App
