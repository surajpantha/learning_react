import React, { use, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

export default function Todos() {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [editId, setEditId] = useState(null);         // which todo is being edited
    const [editText, setEditText] = useState("");       // the updated text

    const handleEdit = (todo) => {
        setEditId(todo.id);              // set editable todo
        setEditText(todo.text);          // preload existing text
    };

    const handleUpdate = () => {
    dispatch(updateTodo({ id: editId, text: editText }));
    setEditId(null);                
    setEditText("");
  };
  const handleRemove=(editId)=>{
    dispatch(removeTodo(editId))
  }
   
  return (
    <div className="space-y-3 mt-6">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between bg-white rounded shadow px-4 py-2 transition-all duration-300 hover:bg-gray-50"
        >
          {editId === todo.id ? (
            <div className="flex-grow">
              <input
                type="text"
                className="border rounded px-3 py-1 w-full text-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            </div>
          ) : (
            <p className="flex-grow text-gray-800">{todo.text}</p>
          )}

          <div className="ml-3 flex space-x-2">
            {editId === todo.id ? (
              <button
                onClick={handleUpdate}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm"
              >
                Edit
              </button>
            )}

            <button
              onClick={()=>handleRemove(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

















// return (
//     <div>
//       {todos.map((todo) => (
//         <li className="list-none" key={todo.id}>
//           {editId === todo.id ? (
//             <>
//               <input
//                 type="text"
//                 value={editText}
//                 onChange={(e) => setEditText(e.target.value)}
//               />
//               <button onClick={handleUpdate}>Save</button>
//             </>
//           ) : (
//             <>
//               {todo.text}
//               <button onClick={()=>handleRemove(todo.id)}>X</button>
//               <button onClick={() => handleEdit(todo)}>Edit</button>
//             </>
//           )}
//         </li>
//       ))}
//     </div>
//   );
// }
