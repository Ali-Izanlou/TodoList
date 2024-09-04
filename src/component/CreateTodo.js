import { useDispatch } from "react-redux"
import { postTodo } from "./redux/todoAction"
import { useRef } from "react"


const CreateTodo = () => {

    const dispatch = useDispatch()

    const inputVal = useRef(null)


    return (

        <form onSubmit={e => e.preventDefault()}>
            <div className="relative w-full md:w-[65%]">
                <input ref={inputVal} type="text" id="create" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 focus:outline-none" placeholder="The title of Todo . . ." />
                <button onClick={() => { inputVal.current.value && dispatch(postTodo(inputVal.current.value)); inputVal.current.value = '' }} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 " >Create</button>
            </div>
        </form>

    )

}

export default CreateTodo