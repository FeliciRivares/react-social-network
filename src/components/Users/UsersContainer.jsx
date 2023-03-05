import { connect } from "react-redux"
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer"
import Users from "./Users"

let mapStateToProps = (state) => {
    return {
       users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersID) => {
            dispatch(followAC(usersID));
        },
        unFollow: (usersID) => {
            dispatch(unfollowAC(usersID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer