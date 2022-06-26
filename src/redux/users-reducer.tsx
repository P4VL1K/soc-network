const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'


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
type ActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType

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
}

let initialState: InitialStateType = {
    users: [
        // {
        //     id: 1,
        //     followed: false,
        //     photoUrl: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
        //     fullName: "Dmitry",
        //     status: "I am a boss",
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     photoUrl: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
        //     fullName: "Oleg",
        //     status: "I am a boss too",
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     followed: false,
        //     photoUrl: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
        //     fullName: "Nikolay",
        //     status: "I am a boss too",
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserPropsType>) => ({type: SET_USERS, users})

export default usersReducer