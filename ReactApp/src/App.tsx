import React from 'react';
import './App.scss';
import { mediaPrefix } from './customExports'
import  NavPod  from './components/nav/navPod'
import ShopPod from './components/shop/shopPod';
import { Route } from 'react-router-dom';
import {env} from './env/dev'


function App() {
    return (
        <>
        <NavPod/>
        return <ShopPod env/>
                
        </>
  )
}

export default App;
