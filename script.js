//Establish DOM Elements as Variables


const list = document.getElementById('list')
const clearBtn = document.getElementById('clear')
const grocerySubmit = document.getElementById('addGrocery')


// Instantiate default state value:
const initialState = {
    groceries: []
}

// Establish the reducer. Takes initial state value and an action as arguments.

const groceryReducer = (state = initialState.groceries, action) => {
    switch(action.type) {
        case 'grocery/add':
            return [
                ...state, 
                {
                    text: action.text
                }
            ]
        case 'grocery/clear':
            return []
        default: 
            return state
    }
}

// Establish Store and Create Actions
let store = Redux.createStore(groceryReducer)

const newGrocery = (e) => {
    e.preventDefault()
    let groceryText = document.getElementById('newItem').value
    store.dispatch({
        type: 'grocery/add',
        text: groceryText
    })
    console.log(store.getState())
}

const clearList = () => {
    let groceryText = document.getElementById('newItem').value
    store.dispatch({
        type: 'grocery/clear',
    })
    console.log(store.getState())
}

grocerySubmit.addEventListener('click',newGrocery)
clearBtn.addEventListener('click', clearList)