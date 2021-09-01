export function getEmployee() {
    return dispatch => {
        return dispatch({
            type : 'GET_Employee()'
        });
    }
};

