import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';

const App = () => {
	return (
		<Router>
			<div>
				<Routes>
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/user-list' element={<UserList />} />
					<Route path='/' element={<Login />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
