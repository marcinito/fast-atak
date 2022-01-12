



const ownItems={
    item1:{name:null,hit:null,nazwa:null,opis:null},
    item2:{name:null,hit:null,nazwa:null,opis:null},
    item3:{name:null,hit:null,nazwa:null,opis:null},
    item4:{name:null,hit:null,nazwa:null,opis:null},
}

const wlasneItemkiReducer=(state=ownItems,action)=>{
    switch(action.type){
        case "hpPotion":
            return {...state,item1:action.payload}
            case "kulaognia":
                return {...state,item2:{name:action.payload,hit:action.payload2,nazwa:action.payload3,opis:action.payload4}}
                case "ogien":
                    return {...state,item3:{name:action.payload,hit:action.payload2,nazwa:action.payload3,opis:action.payload4}}
            default:
                return state
    }
}

export default wlasneItemkiReducer