
export const getTodo = deta => {

    return {
        type: 'GET_TODO',
        payload: deta
    }

}

export const errTodo = err => {

    return {
        type: 'ERROR_TODO',
        payload: err
    }

}

export const loadTodo = status => {

    return {
        type: 'LODDING_TODO',
        payload: status
    }

}

export const completeTodo = comp => {

    return {
        type: 'COMPLETE_TODO',
        payload: comp

    }

}

export const deleteTodo = del => {

    return {
        type: 'DELETE_TODO',
        payload: del

    }

}

export const createTodo = todo => {

    return {
        type: 'CREATE_TODO',
        payload: todo

    }

}

export const createBtn = status => {

    return {
        type: 'CREATE_BUTTON',
        payload: status

    }

}

export const searchBtn = status => {

    return {
        type: 'SEARCH_BUTTON',
        payload: status

    }

}

export const inputTodo = value => {

    return {
        type: 'INPUT_TODO',
        payload: value

    }

}

export const fetchTodo = () => {

    return dispatch => {

        
        dispatch(loadTodo(true))
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(deta => {

                dispatch(getTodo(deta))
                dispatch(loadTodo(false))
            })
            .catch(err => {

                dispatch(errTodo(err.message))
                dispatch(loadTodo(false))

            })

    }
}

export const putTodo = todo => {

    return dispatch => {

        dispatch(loadTodo(true))
        fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
            method: 'PATCH',
            body: JSON.stringify({

                completed: !todo.completed

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(deta => {

                dispatch(completeTodo(deta))
                dispatch(loadTodo(false))
            })
            .catch(err => {

                dispatch(errTodo(err.message))
                dispatch(loadTodo(false))
            })
    }
}

export const delTodo = todo => {

    return dispatch => {

        dispatch(loadTodo(true))
        fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then( () => {

                dispatch(deleteTodo(todo))
                dispatch(loadTodo(false))
            })
            .catch(err => {

                dispatch(errTodo(err.message))
                dispatch(loadTodo(false))
            })
    }

}

export const postTodo = value => {

    return dispatch => {

        dispatch(loadTodo(true))
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: value ,
              completed: false,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then( res => res.json())
            .then( deta => {
                dispatch(createTodo(deta))
                dispatch(loadTodo(false))
                value = ""
            })
            .catch(err => {

                dispatch(errTodo(err.message))
                dispatch(loadTodo(false))
            })
        }

}


