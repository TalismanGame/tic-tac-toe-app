
export const changeUserInfo = (payload) => (dispatch, getState) => {
    dispatch({
        type: 'CHANGE_USER',
        payload
    })
}
