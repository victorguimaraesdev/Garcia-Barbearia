import { useReducer, useEffect } from "react";
import axios from "axios";


const apiReducer = (state: any, action: any) => {
    switch (action.type) {
        case "SEND_REQUEST":
            return { ...state, loading: true, error: null };
        case "RESPONSE":
            return { ...state, loading: false, data: action.payload };
        case "ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const useAPI = (url: string, method: string, body: object) => {
    const [state, dispatch] = useReducer(apiReducer, {
        loading: false,
        data: null,
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "SEND_REQUEST" });
            try {
                const response = await axios({
                    method,
                    url,
                    data: body
                });
                dispatch({ type: "RESPONSE", payload: response.data });
            } catch (error) {
                let errorMessage = "An unknown error occurred";
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                dispatch({ type: "ERROR", payload: errorMessage });
            }
        };

        fetchData();
    }, [url, method, body]);

    return state;
}