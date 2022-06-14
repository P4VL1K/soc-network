import {ActionsTypes, SidebarType} from "./store";




export type initialStateSideBarType = {
    sideBars:Array<SidebarType>
}
let initialState = {
    sideBars:[
        {id: 1, name: "Alex"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Irina"}
    ]
}




const sidebarReducer = (state: initialStateSideBarType = initialState, action: ActionsTypes) => {
    return state
}

export default sidebarReducer