const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TODDLE_IS_FETCHING = 'TODDLE_IS_FETCHING'


type FollowActionType = {
    type: "FOLLOW"
    userId: number
}
type UnfollowActionType = {
    type: "UNFOLLOW"
    userId: number
}
type SetUsersActionType = {
    type: "SET_USERS"
    users: Array<UserPropsType>
}
type SetCurrentPageType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
type SetTotalUsersCountType = {
    type: 'SET_TOTAL_USERS_COUNT'
    count: number
}
type ToggleIsFetchingType = {
    type: 'TODDLE_IS_FETCHING'
    isFetching: boolean
}
type ActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType

type LocationPropsType = {
    city: string
    country: string
}
export type UserPropsType = {
    id: number
    followed: boolean
    photoUrl: string
    fullName: string
    status: string
    location: LocationPropsType
}
export type InitialStateType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 12,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                   return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u,followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TODDLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId})
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserPropsType>) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TODDLE_IS_FETCHING, isFetching})

export default usersReducer