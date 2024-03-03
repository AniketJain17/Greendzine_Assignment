import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import logo from '../Assets/moptro.png';
import UserLogo from '../Assets/User.png';
import { FaHome, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
	const navigate = useNavigate();
	const notificationCount = 4;

	const progressData = {
		Monday: 4,
		Tuesday: 92,
		Wednesday: 122,
		Thursday: 93,
		Friday: 89,
		Saturday: 98,
	};

	const redirectToUserList = () => {
		navigate('/user-list');
	};
	const redirectToDashboard = () => {
		navigate('/dashboard');
	};

	return (
		<div className='main-dashboard'>
			<div className='logo-container' onClick={redirectToUserList}>
				<img src={UserLogo} alt='user-logo' />
			</div>
			<div className='dashboard-header'>
				<img src={logo} alt='logo'></img>
				<div className='noti-badge'>{notificationCount}</div>
			</div>
			<div className='dashboard'>
				<h3>Employee Productivity Dashboard:</h3>
				{Object.entries(progressData).map(([day, progress]) => (
					<div key={day} className='progress-bar-container'>
						<div className='day'>
							<h4>Productivity on {day}:</h4>
							<h5>{progress}%</h5>
						</div>
						<div className='progress-bar'>
							<div className='progress' style={{ width: `${progress}%` }}></div>
						</div>
					</div>
				))}
			</div>
			<div className='bottom-navigation'>
				<FaHome onClick={redirectToDashboard} size={25} />
				<FaUsers onClick={redirectToUserList} size={25} />
			</div>
		</div>
	);
};

export default Dashboard;
