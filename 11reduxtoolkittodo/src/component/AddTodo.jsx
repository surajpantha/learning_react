import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"
function AddTodo() {

    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")

    }

    return (
        <>
            <form action="" onSubmit={addTodoHandler}>
               
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                         add Todos
                        </label>
                        <div className="mt-2">
                            <input

                                id="first-name"

                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddTodo