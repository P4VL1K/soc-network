const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


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
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
type ToggleFollowingProgressType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: number
}
type ActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType | ToggleFollowingProgressType

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
    followingInProgress: Array<number>
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 12,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2,3]
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
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollow = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserPropsType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export default usersReducer