





const ownItems={
    item1:{name:null,hit:null,nazwa:null,opis:null,iloczyn:null},
    item2:{name:null,hit:null,nazwa:null,opis:null,iloczyn:null},
    item3:{name:null,hit:null,nazwa:null,opis:null,iloczyn:null},
    item4:{name:null,hit:null,nazwa:null,opis:null,iloczyn:null},
}

const wlasneItemkiReducer=(state=ownItems,action)=>{
    switch(action.type){
        case "hpPotion":
            return {...state,item1:action.payload}
            case "kulaognia":
                return {...state,item2:{name:action.payload,hit:action.payload2,nazwa:action.payload3,opis:action.payload4,iloczyn:action.payload5}}
                case "ogien":
                    return {...state,item3:{name:action.payload,hit:action.payload2,nazwa:action.payload3,opis:action.payload4,iloczyn:action.payload5}}
                    case "defaultItem":
                        return {...state,item1:{name:action.payload,hit:action.payload2,nazwa:action.payload3,opis:action.payload4,iloczyn:action.payload5}}
                        case "axe":
                            return {...state,item4:{name:action.payload,hit:action.payload2,nazwa:action.payload3,opis:action.payload4,iloczyn:action.payload5}}
                    default:
                return state
    }
}

export default wlasneItemkiReducer