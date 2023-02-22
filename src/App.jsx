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
        <Navbar topFriends={props.data.topFriends}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route  path='/profile' element={<Profile createNewPost={props.createNewPost} postData={props.data.profile.postData} />} />
            <Route  path='/dialogs' element={<Dialogs dialog={props.data.dialog.dialog} textItems={props.data.dialog.textItems}/>} />
            <Route  path='/news' element={<News/>} />
            <Route  path='/music' element={<Music/>} />
            <Route  path='/settings' element={<Settings/>} />
          </Routes>
        </div>
      </div>
     </BrowserRouter>
  )
}

export default App;
