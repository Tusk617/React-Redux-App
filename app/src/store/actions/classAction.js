import axios from "axios";


export const fetchClasses = () => {
    return dispatch => {
        dispatch({type: "FETCH_CLASSES_START"});
        axios.get('http://www.dnd5eapi.co/api/classes/')
        .then(response => {
            dispatch({type: "FETCH_CLASSES_SUCCESS", payload: response.data.results})
        })
        .catch(error => {
            dispatch({type: "FETCH_CLASSES_ERROR", payload: `Error: ${error.response.status}: ${error.response.result}`})
        })
    }
}