import React from 'react';



export const initialState = {
    todo: [{
            item: 'learn about reducers',
            completed: false,
            id: 3892987589,
            dueBy: 'thursday'
        },
        {
            item: 'figure out what im doing',
            completed: false,
            id: 3892997658,
            dueBy: 'friday'
        }

    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-TODO':
            return {
                ...state,
                todo: [...state.todo,
                    {
                        item: action.payload.item,
                        completed: false,
                        id: Date.now(),
                        dueBy: action.payload.dueBy
                    }
                ]
            };
        case 'DELETE-TODO':
            return {
                ...state,
                todo: state.todo.filter(items => !items.completed)
            };
        case 'TOGGLE-COMPLETED':
            return {
                ...state,
                todo: state.todo.map(item => item.id === action.payload ? {...item, completed: !item.completed } : item)
            };

        default:
            return state;
    };

}