import {useSelector,useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreator} from './state/index'
import './css/style.css'
import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'
import Miasto from './components/Miasto'
import Create from './components/Create'
import Sklep from './components/Sklep'
import Arena from './components/Arena'
import GameOver from './components/GameOver'


function App() {
  return (
    <div>
  <Routes>
                <Route path="/create" element={<Create/>}></Route>
                <Route path="/miasto" element={<Miasto/>}></Route>
                <Route path="/sklep" element={<Sklep/>}></Route>
                <Route path="/arena" element={<Arena/>}></Route>
                <Route path="/gameover" element={<GameOver/>}></Route>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
            <p>siema</p>
    </div>
  );
}

export default App;
