import { combineReducers } from "redux";
import indexReducer from "./reducers/indexReducer";
import itemkiReducer from "./reducers/itemkiReducer";

import nameReducer from "./reducers/nameReducer";
import noszonaBronReducer from "./reducers/noszonaBronReducer";
import playerHpReducer from "./reducers/playerHpReducer";
import wlasneItemkiReducer from "./reducers/posiadaneItemyReducer";
import setHeroReducer from "./reducers/setHeroReducer";
import shopReducer from "./reducers/shopReducer";
import zlotoReducer from "./reducers/zlotoReducer";


const mainReducer=combineReducers({
    name:nameReducer,
    hero:setHeroReducer,
    index:indexReducer,
    zloto:zlotoReducer,
    noszonaBron:noszonaBronReducer,
    playerHp:playerHpReducer,
    itemki:itemkiReducer,
    shop:shopReducer,
    wlasneItemki:wlasneItemkiReducer,
 

})

export default mainReducer