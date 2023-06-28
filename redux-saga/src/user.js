import { useDispatch, useSelector } from "react-redux"

export const User = () => {
    const error = useSelector(state => state.error)
    const data = useSelector(state => state.data)
    const apiStatus = useSelector(state => state.apiStatus)
    const dispatch = useDispatch()

    const fetchUser = () => {
        dispatch({type: 'FETCH_USER'})
    }
    if (apiStatus ==='init') {
        return <button onClick={fetchUser}>Load User</button>
    }

    return <div>{data.map((user)=> (
        <div key = {user.userID}>
            <div>User ID: {user.userID}</div>
            <div>ID: {user.id}</div>
            <div>Title: {user.title}</div>
            <div>Body: {user.body}</div>
            {console.log(user.userID)}
        </div>
    ))}</div>
}