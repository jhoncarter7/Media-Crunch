import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/home/Home';
import Story from './pages/story/Story';
import Feed from './pages/feed/Feed';
import { Fragment } from 'react';

function App() {



  return (
  <Fragment>
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/story' element={<Story/>}/>
      <Route path='/feeds' element={<Feed/>}/>
    </Routes>
    </Fragment>
  )


}

export default App;
