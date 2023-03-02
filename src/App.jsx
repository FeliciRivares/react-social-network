import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar 
        // topfriends={props.state.friends.topFriends}
        />
        <div className='app-wrapper-content'>
          <Routes>
            <Route  path='/profile' element={<Profile  store={props.store}/>} />
            <Route  path='/dialogs' element={<Dialogs store={props.store}/>} />
            <Route  path='/news' element={<News/>} />
            <Route  path='/music' element={<Music/>} />
            <Route  path='/settings' element={<Settings/>} />
          </Routes>
        </div>
      </div>
     </BrowserRouter>
  )
}

// dispatch={props.dispatch}
// dialog={props.data.dialog.dialog}
// textItems={props.data.dialog.textItems}

export default App;
