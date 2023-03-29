import React, { useReducer } from "react";
import mainApi from "../Api/mainApi";
export const Context = React.createContext()

const initialState = {
    data: null,
    pageNum: 1,
    error: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "save_data":
            return { ...state, data: action.payload }

        case "changePage":
            if (state.pageNum + action.payload >= 1 && state.data.length >= 48)
                return { ...state, pageNum: state.pageNum + action.payload }
            return state

        case "reset_pages":
            return { ...state, pageNum: 1 }

        case "error":
            return { ...state, error: action.payload }

        default:
            return state
    }
}


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getData = async (query = "", pageNum = 1) => {
        try {
            if (query) {
                resetPg()
            }
            const response = await mainApi.get("",
                {
                    params: {
                        q: query,
                        page: pageNum
                    }
                })
            dispatch({ type: "save_data", payload: response.data.hits })
        } catch (error) {
            dispatch({ type: "error", payload: "something went wrong!" })
        }
    }

    const changePage = (value = 1) => {
        dispatch({ type: "changePage", payload: value })
    }

    const resetPg = () => {
        dispatch({ type: "reset_pages" })
    }



    return < Context.Provider value={{ state, getData, changePage, resetPg }}>
        {children}
    </Context.Provider >
}