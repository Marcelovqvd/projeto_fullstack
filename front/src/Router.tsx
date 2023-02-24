import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

export function Router() {
	return (
		<Routes>
			<Route path='/hublocal' element={<SignIn />} />
			<Route path='/hublocal/signup' element={<SignUp />} />
			<Route path='/home' element={<Home />} />   
			<Route path='*' element={<Navigate to='/hublocal' />} />    
		</Routes>
	);
}