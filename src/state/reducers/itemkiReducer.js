import hpPotion from '../../img/hppoint.png'
import tasak from '../../img/tasak.png'
import zloto from '../../img/zloto.png'
import kulaognia from '../../img/kulaognia.png'

const itemkiState={
    hpPotion:{name:hpPotion,ilosc:1},
    tasak:{name:tasak,hit:25},
    gold:zloto,
    kulaognia:{name:kulaognia,hit:40},
    item:undefined
}


const itemkiReducer=(state=itemkiState,action)=>{
    switch(action.type){
case "itemki":
    return{...state}
    case "ile":
        return {...state,hpPotion:{...hpPotion,name:hpPotion,ilosc:state.hpPotion.ilosc-=1}}
        case "kupionyHp":
        return {...state,hpPotion:{...hpPotion,name:hpPotion,ilosc:state.hpPotion.ilosc+=1}}
        case "kup":
        return {...state,item:action.payload}
    default:
        return state
    }
}
export default itemkiReducer