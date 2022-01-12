import {useSelector,useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreator} from './state/index'
import './css/style.css'
import Home from './components/Home'

function App() {
  return (
    <div>
<Home/>
    </div>
  );
}

export default App;
