import { useDispatch } from "react-redux"
import { createBtn, fetchTodo, searchBtn } from "./redux/todoAction"


const Button = () => {

    const dispatch = useDispatch()
    
    return (

        <div className="inline-flex rounded-md shadow-sm " role="group">
            <button onClick={() => {dispatch(createBtn(true));dispatch(searchBtn(false));dispatch(fetchTodo())}}  type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-green-700  focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700 focus:outline-none" autoFocus >
                Create
            </button>
            <button onClick={() => {dispatch(searchBtn(true));dispatch(createBtn(false))}} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700" >
                Search
            </button>

        </div>

    )

}

export default Button