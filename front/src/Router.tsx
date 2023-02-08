import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";

export function Router() {
	return (
		<Routes>
			<Route path='/hublocal' element={<Signin />} />  
			<Route path='/home' element={<Home />} />   
			<Route path='*' element={<Navigate to='/hublocal' />} />    
		</Routes>
	);
}