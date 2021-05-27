
import * as types from '../types'

const INIT_STATE = {
    filter: {
        perPage: 15
    },
    fetching: false,
    storing: false,
    data: [
        {
            name: "Car",
            quantity: 5,
            created_at: "02-02-2002",
            options: "OPTIONS HERE",
            id: 54,
            user_id: 1,
            active: 1,
            categories: [
                {
                    name: "Food",
                    id: 5
                },
                {
                    name: "Sport",
                    id: 6
                }
            ]
        },
        {
            name: "Table",
            quantity: 14,
            created_at: "02-02-2011",
            options: "OPTIONS HERE",
            id: 23,
            user_id: 1,
            active: 1
        },
        {
            name: "Fork",
            quantity: 70,
            created_at: "02-02-2003",
            options: "OPTIONS HERE",
            id: 8,
            user_id: 1,
            active: 0
        }
    ]
}

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case types.APPLY_FILTER:
            return { ...state, filter: { ...action.payload } }
        case types.PRODUCTS_FETCH:
            return { ...state, fetching: true }
        case types.PRODUCTS_STORE:
            return { ...state, storing: true }
        case types.PRODUCTS_UPDATE_STATE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}