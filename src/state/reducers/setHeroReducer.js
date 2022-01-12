const heroState={
    hero:"sadasd"
}
const setHeroReducer=(state=heroState,action)=>{
    switch(action.type){
        case "setHero":
            return{...state,hero:action.payload}
            default:
                return state
    }

}
export default setHeroReducer