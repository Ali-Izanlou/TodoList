import Swal from "sweetalert2"

const initialState = {
    todos: [],
    serchTodo: [],
    err: '',
    loadding: false,
    sweet: null,
    activeCreate: true,
    activeSearch: false,
    isTodos: false,
    isSearchTodo: false

}


export const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_TODO':

            return {
                ...state,
                todos: action.payload,
                isTodos: true
            }

        case 'ERROR_TODO':

            return {
                ...state,
                err: action.payload
            }

        case 'LODDING_TODO':

            return {
                ...state,
                loadding: action.payload
            }

        case 'COMPLETE_TODO':

            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo),
                serchTodo: state.serchTodo.map(todo => todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo),
                sweet: action.payload.completed && Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "todos is complete",
                    showConfirmButton: false,
                    timer: 1000
                })

            }

        case 'DELETE_TODO':

            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.payload.id),
                serchTodo: state.serchTodo.filter(t => t.id !== action.payload.id),
                sweet: Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "todos was deleted",
                    showConfirmButton: false,
                    timer: 1000
                })

            }

        case 'CREATE_TODO':

            return {
                ...state,
                todos: [action.payload, ...state.todos],
                sweet: Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "todos was created",
                    showConfirmButton: false,
                    timer: 1000
                })

            }
        case 'CREATE_BUTTON':

            return {
                ...state,
                activeCreate: action.payload
            }

        case 'SEARCH_BUTTON':

            return {
                ...state,
                activeSearch: action.payload
            }

        case 'INPUT_TODO':

            return {
                ...state,
                isSearchTodo: true,
                isTodos: false,
                serchTodo: state.todos.filter(todo => todo.title.includes(action.payload)) 
                
            }

        default:
            return state
    }
}