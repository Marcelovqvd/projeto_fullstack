import { Button } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Signin from './components/signin/Sigin'



export function Router() {
  return (
    <Routes>
        <Route path='/hublocal' element={<Signin />} />  
        <Route path='/home' element={<Home />} />   
        <Route path='*' element={<Navigate to='/hublocal' />} />    
    </Routes>
  )
}