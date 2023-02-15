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
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route exact path='/profile' element={<Profile/>} />
            <Route exact path='/dialogs' element={<Dialogs/>} />
            <Route exact path='/news' element={<News/>} />
            <Route exact path='/music' element={<Music/>} />
            <Route exact path='/settings' element={<Settings/>} />
          </Routes>
        </div>
      </div>
     </BrowserRouter>
  )
}

export default App;
